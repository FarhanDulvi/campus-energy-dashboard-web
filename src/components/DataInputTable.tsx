import type { BlockData } from '../types';
import { Settings, Save } from 'lucide-react';

interface Props {
    blocks: BlockData[];
    onUpdate: (blockId: string, dayIndex: number, newValue: number) => void;
}

export function DataInputTable({ blocks, onUpdate }: Props) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-slate-400" />
                    <h3 className="text-lg font-semibold text-slate-800">Data Input Mode</h3>
                </div>
                <button disabled className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-400 rounded-lg text-sm font-medium cursor-not-allowed">
                    <Save className="w-4 h-4" />
                    Auto-saved
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                        <tr>
                            <th className="px-4 py-3 font-medium rounded-l-lg">Block Name</th>
                            {[1, 2, 3, 4, 5, 6, 7].map(day => (
                                <th key={day} className="px-4 py-3 font-medium text-center">Day {day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {blocks.map((block) => (
                            <tr key={block.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-4 font-medium text-slate-900">{block.name}</td>
                                {block.usage.map((val, idx) => (
                                    <td key={idx} className="px-2 py-3">
                                        <input
                                            type="number"
                                            value={val}
                                            onChange={(e) => onUpdate(block.id, idx, parseFloat(e.target.value) || 0)}
                                            className="w-full text-center bg-transparent border border-transparent hover:border-slate-200 focus:border-emerald-500 focus:bg-white rounded px-2 py-1 outline-none transition-all"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
