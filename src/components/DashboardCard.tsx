import type { BlockStats } from '../types';
import { Zap, Activity } from 'lucide-react';

interface Props {
    stats: BlockStats;
}

export function DashboardCard({ stats }: Props) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">{stats.name}</h3>
                    <p className="text-sm text-slate-500">Weekly Overview</p>
                </div>
                <div className="p-2 bg-emerald-50 rounded-lg">
                    <Zap className="w-5 h-5 text-emerald-600" />
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <p className="text-sm text-slate-500 mb-1">Total Consumption</p>
                    <p className="text-2xl font-bold text-slate-900">
                        {stats.total.toFixed(2)} <span className="text-sm font-normal text-slate-400">kWh</span>
                    </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-600">
                            Avg: {stats.average.toFixed(2)} kWh/day
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
