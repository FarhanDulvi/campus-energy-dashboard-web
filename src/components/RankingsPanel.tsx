import type { BlockStats } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Props {
    highest: BlockStats | null;
    lowest: BlockStats | null;
}

export function RankingsPanel({ highest, lowest }: Props) {
    if (!highest || !lowest) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Highest Consumption */}
            <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl shadow-sm border border-rose-100">
                <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-rose-500" />
                    <h3 className="font-semibold text-rose-900">Highest Consumption</h3>
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-1">{highest.name}</p>
                <p className="text-sm text-slate-500 mb-4">{highest.total.toFixed(2)} kWh Total</p>

                <div className="p-3 bg-white/60 rounded-lg border border-rose-100 text-sm">
                    <span className="font-medium text-rose-800">Action Required:</span>
                    <p className="text-slate-600 mt-1">Engineers should investigate potential waste.</p>
                </div>
            </div>

            {/* Lowest Consumption */}
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-sm border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-semibold text-emerald-900">Lowest Consumption</h3>
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-1">{lowest.name}</p>
                <p className="text-sm text-slate-500 mb-4">{lowest.total.toFixed(2)} kWh Total</p>

                <div className="p-3 bg-white/60 rounded-lg border border-emerald-100 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-600">Optimal efficiency achieved.</p>
                </div>
            </div>
        </div>
    );
}
