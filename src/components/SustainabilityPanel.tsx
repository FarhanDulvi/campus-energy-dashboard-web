import type { BlockStats } from '../types';
import { Leaf, Trees } from 'lucide-react';

interface Props {
    stats: BlockStats[];
}

export function SustainabilityPanel({ stats }: Props) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-semibold text-slate-800">Sustainability Report</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-emerald-50/50">
                        <tr>
                            <th className="px-4 py-2 rounded-l-lg">Block</th>
                            <th className="px-4 py-2">CO2 (kg)</th>
                            <th className="px-4 py-2 rounded-r-lg">Tree Offset</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.map(block => (
                            <tr key={block.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                                <td className="px-4 py-3 font-medium text-slate-900">{block.name}</td>
                                <td className="px-4 py-3 text-slate-600">{block.co2.toFixed(1)}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-1.5 text-emerald-700">
                                        <Trees className="w-3.5 h-3.5" />
                                        <span className="font-semibold">{block.trees.toFixed(1)}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-xs text-center text-slate-400">
                * 1 Tree absorbs ~20kg CO2 per year
            </p>
        </div>
    );
}
