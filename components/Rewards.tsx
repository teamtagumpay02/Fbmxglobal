
import React from 'react';
import { UserStats } from '../types';

interface RewardsProps {
  stats: UserStats;
  onCollect: () => void;
}

export const Rewards: React.FC<RewardsProps> = ({ stats, onCollect }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Yield Harvest</h1>
        <p className="text-slate-400 text-sm">Collect your accrued rewards from the pool.</p>
      </div>

      {/* Reward Pulse Card */}
      <div className="glass rounded-3xl p-8 flex flex-col items-center justify-center gap-6 border-teal-500/30">
        <div className="relative">
          <div className="absolute inset-0 bg-teal-500/20 rounded-full animate-ping scale-150"></div>
          <div className="w-24 h-24 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/20">
            <span className="material-icons-outlined text-4xl text-white">bolt</span>
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className="text-slate-400 text-sm font-medium">Pending Rewards</p>
          <p className="text-5xl font-bold tracking-tight text-teal-400">${stats.pendingRewards.toFixed(2)}</p>
        </div>

        <button 
          onClick={onCollect}
          disabled={stats.pendingRewards === 0}
          className="w-full py-4 bg-teal-400 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 active:scale-95"
        >
          <span className="material-icons-outlined">download</span>
          Collect to Wallet
        </button>
      </div>

      {/* Stats Table */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Income Breakdown</h3>
        <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5">
          <div className="p-4 flex justify-between items-center">
            <span className="text-slate-400 text-sm">Direct Referrals</span>
            <span className="font-bold text-blue-400">+$12.40</span>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-slate-400 text-sm">Matching Bonus</span>
            <span className="font-bold text-purple-400">+$8.15</span>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-slate-400 text-sm">Staking Dividends</span>
            <span className="font-bold text-green-400">+$24.60</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-xs text-blue-400 leading-relaxed">
        <p>💡 Tip: Gas fees on BSC are low, but we recommend collecting once a week to maximize efficiency. Rewards accrue every 24 hours.</p>
      </div>
    </div>
  );
};
