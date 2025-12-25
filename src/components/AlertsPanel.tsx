import type { Alert } from '../types';
import { AlertTriangle, CheckCircle, ZapOff } from 'lucide-react';

interface Props {
    alerts: Alert[];
}

export function AlertsPanel({ alerts }: Props) {
    if (alerts.length === 0) {
        return (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">Smart Alerts</h3>
                </div>
                <div className="flex flex-col items-center justify-center py-8 text-center h-40">
                    <div className="p-3 bg-emerald-50 rounded-full mb-3">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <p className="text-slate-600 font-medium">All Systems Nominal</p>
                    <p className="text-sm text-slate-400">No anomalies or threshold violations.</p>
                </div>
            </div>
        );
    }

    const thresholdAlerts = alerts.filter(a => a.type === 'THRESHOLD');
    const anomalyAlerts = alerts.filter(a => a.type === 'ANOMALY');

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Smart Alerts</h3>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">{alerts.length}</span>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {/* Anomalies first (more critical) */}
                {anomalyAlerts.map((alert, idx) => (
                    <div key={`anom-${idx}`} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                        <div className="mt-0.5">
                            <ZapOff className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-red-800">
                                Spike Detected: {alert.blockName}
                            </p>
                            <p className="text-xs text-red-600 mt-1">
                                Day {alert.day} usage of {alert.usage.toFixed(1)} kWh exceeded
                                avg threshold ({alert.threshold?.toFixed(1)} kWh)
                            </p>
                        </div>
                    </div>
                ))}

                {/* Standard Thresholds */}
                {thresholdAlerts.map((alert, idx) => (
                    <div key={`thresh-${idx}`} className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                        <div className="mt-0.5">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-amber-800">
                                Limit Exceeded: {alert.blockName}
                            </p>
                            <p className="text-xs text-amber-600">
                                Day {alert.day} recorded {alert.usage.toFixed(2)} kWh
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
