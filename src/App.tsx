import { Zap } from 'lucide-react';
import { useEnergyData } from './hooks/useEnergyData';
import { DashboardCard } from './components/DashboardCard';
import { RankingsPanel } from './components/RankingsPanel';
import { AlertsPanel } from './components/AlertsPanel';
import { DataInputTable } from './components/DataInputTable';
import { VisualChartPanel } from './components/VisualChartPanel';
import { SustainabilityPanel } from './components/SustainabilityPanel';
import { CostForecastPanel } from './components/CostForecastPanel';

function App() {
  const { dashboardStats, rankings, alerts, blocks, updateUsage } = useEnergyData();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-600 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              Campus Energy Dashboard
            </h1>
          </div>
          <div className="text-sm text-slate-500 font-medium hidden sm:block">
            Group 9 • EPG1013
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Stats Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Real-Time Overview</h2>
            <span className="text-sm text-slate-500">Live Metric Analysis</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardStats.map(stat => (
              <DashboardCard key={stat.id} stats={stat} />
            ))}
          </div>
        </section>

        {/* Smart Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Visuals & Sustainability */}
          <div className="lg:col-span-2 space-y-8">
            <CostForecastPanel stats={dashboardStats} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VisualChartPanel stats={dashboardStats} />
              <SustainabilityPanel stats={dashboardStats} />
            </div>

            <RankingsPanel highest={rankings.highest} lowest={rankings.lowest} />
          </div>

          {/* Right Column: Alerts & Side Panels */}
          <div className="space-y-6">
            <AlertsPanel alerts={alerts} />

            {/* Quick Tips Panel (Mini) */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Energy Saving Tip</h3>
              <p className="text-indigo-100 text-sm">
                Reduce usage during peak hours (12 PM - 4 PM) to avoid Tier 3 rates.
                Switch to LED lighting in the {rankings.highest?.name || 'highest usage block'}.
              </p>
            </div>
          </div>

        </div>

        {/* Data Input Section */}
        <section className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">Data Management</h2>
          </div>
          <DataInputTable blocks={blocks} onUpdate={updateUsage} />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          <p>© 2025 Campus Energy System. Designed for Energy Efficiency.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
