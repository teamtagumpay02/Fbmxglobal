
import React from 'react';
import { UserStats } from '../types';

export const Network: React.FC<{ stats: UserStats }> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">My Network</h1>
        <p className="text-slate-400 text-sm">Manage your team and track referral milestones.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass p-4 rounded-2xl text-center">
          <p className="text-[10px] text-slate-500 uppercase font-bold">Total Team</p>
          <p className="text-lg font-bold">{stats.referralCount * 4}</p>
        </div>
        <div className="glass p-4 rounded-2xl text-center">
          <p className="text-[10px] text-slate-500 uppercase font-bold">Directs</p>
          <p className="text-lg font-bold">{stats.referralCount}</p>
        </div>
        <div className="glass p-4 rounded-2xl text-center">
          <p className="text-[10px] text-slate-500 uppercase font-bold">Rank</p>
          <p className="text-lg font-bold text-teal-400">GOLD</p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="glass p-5 rounded-3xl space-y-4">
        <h3 className="font-bold text-sm">Invite Partner</h3>
        <div className="relative flex items-center">
          <input 
            readOnly 
            value="https://fbmx.global/r/oxA4...F93" 
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-xs font-mono text-slate-400"
          />
          <button className="absolute right-2 px-3 py-1.5 bg-teal-400 text-slate-950 rounded-lg text-xs font-bold hover:bg-teal-500 transition-colors">
            Copy
          </button>
        </div>
      </div>

      {/* Levels Visualization */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Network Depth</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(level => (
            <div key={level} className="glass p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center font-bold text-xs border border-white/10">
                  L{level}
                </div>
                <div>
                  <p className="font-bold text-sm">Level {level}</p>
                  <p className="text-xs text-slate-400">{10 * level} active partners</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-teal-400">${(stats.teamVolume / level).toFixed(0)}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Volume</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
