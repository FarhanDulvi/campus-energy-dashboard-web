import type { BlockStats } from '../types';
import { BarChart3 } from 'lucide-react';

interface Props {
    stats: BlockStats[];
}

export function VisualChartPanel({ stats }: Props) {
    const maxTotal = Math.max(...stats.map(s => s.total));

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-semibold text-slate-800">Visual Usage Chart</h3>
            </div>

            <div className="space-y-4">
                {stats.map(block => {
                    const percentage = (block.total / maxTotal) * 100;
                    return (
                        <div key={block.id}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-slate-700">{block.name}</span>
                                <span className="text-slate-500">{block.total.toFixed(0)} kWh</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-3">
                                <div
                                    className="bg-indigo-500 h-3 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
