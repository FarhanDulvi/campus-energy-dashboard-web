import type { BlockStats } from '../types';
import { DollarSign, TrendingUp } from 'lucide-react';

interface Props {
    stats: BlockStats[];
}

export function CostForecastPanel({ stats }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cost Simulation */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                    <DollarSign className="w-5 h-5 text-amber-500" />
                    <h3 className="text-lg font-semibold text-slate-800">Cost Simulator</h3>
                </div>
                <div className="space-y-4">
                    {stats.map(block => (
                        <div key={block.id} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                            <span className="text-sm font-medium text-slate-700">{block.name}</span>
                            <span className="text-sm font-bold text-slate-900">${block.cost.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Forecast */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <h3 className="text-lg font-semibold text-slate-800">Next Week Forecast</h3>
                </div>
                <div className="space-y-4">
                    {stats.map(block => (
                        <div key={block.id} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                            <span className="text-sm font-medium text-slate-700">{block.name}</span>
                            <div className="text-right">
                                <span className="block text-sm font-bold text-blue-600">{block.predictedTotal.toFixed(1)} kWh</span>
                                <span className="text-xs text-slate-400">Trend: UP (5%)</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
