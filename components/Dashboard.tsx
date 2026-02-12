
import React from 'react';
import { UserStats, WalletState } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  stats: UserStats;
  wallet: WalletState;
}

const DATA = [
  { name: 'Mon', yield: 400 },
  { name: 'Tue', yield: 300 },
  { name: 'Wed', yield: 600 },
  { name: 'Thu', yield: 800 },
  { name: 'Fri', yield: 500 },
  { name: 'Sat', yield: 900 },
  { name: 'Sun', yield: 1100 },
];

export const Dashboard: React.FC<DashboardProps> = ({ stats, wallet }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-slate-400 text-sm">Track your passive income and ecosystem growth.</p>
      </div>

      {/* Main Yield Card */}
      <div className="glass p-6 rounded-3xl space-y-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl -mr-16 -mt-16"></div>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Active Deposits</p>
            <p className="text-4xl font-bold mt-1 tracking-tight">${stats.activeDeposit.toLocaleString()}</p>
          </div>
          <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20 font-bold">
            +0.8% Daily
          </div>
        </div>

        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={DATA}>
              <defs>
                <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="yield" stroke="#2dd4bf" fillOpacity={1} fill="url(#colorYield)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          label="Total Earnings" 
          value={`$${stats.totalEarnings}`} 
          icon="payments" 
          color="blue"
        />
        <StatCard 
          label="Daily Rewards" 
          value={`$${stats.dailyPassiveRewards}`} 
          icon="trending_up" 
          color="teal"
        />
        <StatCard 
          label="Team Volume" 
          value={`$${stats.teamVolume.toLocaleString()}`} 
          icon="groups" 
          color="indigo"
        />
        <StatCard 
          label="Referrals" 
          value={stats.referralCount.toString()} 
          icon="person_add" 
          color="purple"
        />
      </div>

      {/* Network Alert */}
      {!wallet.isConnected && (
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex gap-3">
          <span className="material-icons-outlined text-amber-500">warning</span>
          <div className="text-sm">
            <p className="font-bold text-amber-500">Wallet Disconnected</p>
            <p className="text-slate-400">Please connect your BSC wallet to view real-time balance and interactions.</p>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ label, value, icon, color }: { label: string, value: string, icon: string, color: string }) => {
  const colorMap: any = {
    teal: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    indigo: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  };

  return (
    <div className="glass p-5 rounded-2xl flex flex-col gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[color]}`}>
        <span className="material-icons-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-xs text-slate-400 font-medium">{label}</p>
        <p className="text-lg font-bold mt-1">{value}</p>
      </div>
    </div>
  );
};
