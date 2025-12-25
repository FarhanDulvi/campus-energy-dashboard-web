export interface BlockData {
    id: string;
    name: string;
    usage: number[]; // Array of 7 days usage
}

export interface BlockStats {
    id: string;
    name: string;
    total: number;
    average: number;
    co2: number;
    trees: number;
    cost: number;
    predictedTotal: number;
}

export interface Alert {
    blockName: string;
    day: number;
    usage: number;
    type: 'THRESHOLD' | 'ANOMALY';
    threshold?: number;
}
