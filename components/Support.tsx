
import React from 'react';

export const Support: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">FBMX Ecosystem</h1>
        <p className="text-slate-400 text-sm">Protocol documentation and ecosystem tools.</p>
      </div>

      <div className="grid gap-4">
        <DocLink title="Whitepaper" icon="description" description="Deep dive into the tokenomics and roadmap." />
        <DocLink title="Audit Reports" icon="verified_user" description="Certified smart contract security by PeckShield." />
        <DocLink title="Telegram Community" icon="send" description="Join 50k+ members discussing the future." />
        <DocLink title="BSC Scan" icon="search" description="Verify all transactions on the blockchain." />
      </div>

      <div className="glass p-6 rounded-3xl mt-4">
        <h3 className="font-bold mb-3">Protocol Health</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Liquidity Locked</span>
            <span className="text-green-400 font-bold">98%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div className="bg-green-400 h-1.5 rounded-full w-[98%] shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
          </div>
          
          <div className="flex justify-between text-sm mt-6">
            <span className="text-slate-400">Total Value Locked</span>
            <span className="text-teal-400 font-bold">$12.4M</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div className="bg-teal-400 h-1.5 rounded-full w-[72%] shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DocLink = ({ title, icon, description }: { title: string, icon: string, description: string }) => (
  <div className="glass p-5 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-teal-500/50 transition-colors">
      <span className="material-icons-outlined text-teal-400">{icon}</span>
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-sm">{title}</h4>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
    <span className="material-icons-outlined text-slate-600">chevron_right</span>
  </div>
);
