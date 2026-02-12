
import React from 'react';

export const Loader: React.FC<{ message?: string }> = ({ message = 'Syncing Blockchain Data...' }) => {
  return (
    <div className="fixed inset-0 bg-slate-950 z-[100] flex flex-col items-center justify-center p-8 text-center">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full"></div>
        {/* Animated Segment */}
        <div className="absolute inset-0 border-t-4 border-teal-400 rounded-full animate-spin"></div>
        {/* Inner Pulsing Circle */}
        <div className="absolute inset-4 bg-teal-500/10 rounded-full animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 bg-teal-400 rounded-sm rotate-45"></div>
        </div>
      </div>
      
      <div className="mt-8 space-y-2">
        <h2 className="text-xl font-bold tracking-tight text-white">{message}</h2>
        <p className="text-slate-400 text-sm max-w-xs">Establishing secure connection to Binance Smart Chain nodes.</p>
      </div>

      {/* Progress Line */}
      <div className="w-48 h-1 bg-slate-900 rounded-full mt-12 overflow-hidden">
        <div className="h-full bg-teal-400 w-1/2 animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};
