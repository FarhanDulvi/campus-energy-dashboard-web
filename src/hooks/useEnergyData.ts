import { useState, useMemo } from 'react';
import type { BlockData, BlockStats, Alert } from '../types';
import { INITIAL_BLOCK_DATA, DAYS, THRESHOLD_LIMIT } from '../data/mockData';

const CO2_PER_KWH = 0.4;
const TREE_OFFSET_KG = 20.0;
const ANOMALY_PERCENT = 0.4; // 40%

const TIER_1_LIMIT = 100.0;
const TIER_1_RATE = 0.20;
const TIER_2_LIMIT = 300.0;
const TIER_2_RATE = 0.30;
const TIER_3_RATE = 0.50;

export function useEnergyData() {
    const [blocks, setBlocks] = useState<BlockData[]>(INITIAL_BLOCK_DATA);

    const calculateSum = (data: number[]) => {
        return data.reduce((acc, curr) => acc + curr, 0);
    };

    const calculateCost = (total: number) => {
        let cost = 0.0;
        if (total <= TIER_1_LIMIT) {
            cost = total * TIER_1_RATE;
        } else if (total <= TIER_2_LIMIT) {
            cost = (TIER_1_LIMIT * TIER_1_RATE) +
                ((total - TIER_1_LIMIT) * TIER_2_RATE);
        } else {
            cost = (TIER_1_LIMIT * TIER_1_RATE) +
                ((TIER_2_LIMIT - TIER_1_LIMIT) * TIER_2_RATE) +
                ((total - TIER_2_LIMIT) * TIER_3_RATE);
        }
        return cost;
    };

    const dashboardStats: BlockStats[] = useMemo(() => {
        return blocks.map(block => {
            const total = calculateSum(block.usage);
            const average = total / DAYS;
            const co2 = total * CO2_PER_KWH;
            const trees = co2 / TREE_OFFSET_KG;
            const cost = calculateCost(total);
            const predictedTotal = total * 1.05; // 5% growth

            return {
                id: block.id,
                name: block.name,
                total,
                average,
                co2,
                trees,
                cost,
                predictedTotal
            };
        });
    }, [blocks]);

    const rankings = useMemo(() => {
        if (dashboardStats.length === 0) return { highest: null, lowest: null };
        const sorted = [...dashboardStats].sort((a, b) => b.total - a.total);
        return {
            highest: sorted[0],
            lowest: sorted[sorted.length - 1]
        };
    }, [dashboardStats]);

    const alerts: Alert[] = useMemo(() => {
        const newAlerts: Alert[] = [];
        blocks.forEach(block => {
            const total = calculateSum(block.usage);
            const avg = total / DAYS;
            const anomalyThreshold = avg * (1.0 + ANOMALY_PERCENT);

            block.usage.forEach((dailyUsage, index) => {
                // Standard Threshold Alert
                if (dailyUsage > THRESHOLD_LIMIT) {
                    newAlerts.push({
                        blockName: block.name,
                        day: index + 1,
                        usage: dailyUsage,
                        type: 'THRESHOLD'
                    });
                }
                // Anomaly Alert
                if (dailyUsage > anomalyThreshold) {
                    newAlerts.push({
                        blockName: block.name,
                        day: index + 1,
                        usage: dailyUsage,
                        type: 'ANOMALY',
                        threshold: anomalyThreshold
                    });
                }
            });
        });
        return newAlerts;
    }, [blocks]);

    const updateUsage = (blockId: string, dayIndex: number, newValue: number) => {
        setBlocks(prev => prev.map(block => {
            if (block.id === blockId) {
                const newUsage = [...block.usage];
                newUsage[dayIndex] = newValue;
                return { ...block, usage: newUsage };
            }
            return block;
        }));
    };

    return {
        blocks,
        dashboardStats,
        rankings,
        alerts,
        updateUsage
    };
}
