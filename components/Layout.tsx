
import React from 'react';
import { View, WalletState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
  wallet: WalletState;
  onConnect: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView, wallet, onConnect }) => {
  const NavItem = ({ view, icon, label }: { view: View, icon: string, label: string }) => {
    const isActive = currentView === view;
    return (
      <button 
        onClick={() => setView(view)}
        className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'text-teal-400' : 'text-slate-400'}`}
      >
        <div className={`p-2 rounded-xl ${isActive ? 'bg-teal-400/10' : ''}`}>
          <span className="material-icons-outlined text-2xl">{icon}</span>
        </div>
        <span className="text-[10px] font-medium tracking-wide uppercase">{label}</span>
      </button>
    );
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-30 glass h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-teal-500/20">
            F
          </div>
          <span className="font-bold tracking-tight text-lg">FBMX <span className="text-teal-400">GLOBAL</span></span>
        </div>
        
        <button 
          onClick={onConnect}
          className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-semibold hover:bg-teal-500/20 transition-all active:scale-95"
        >
          {wallet.isConnected ? (
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              {wallet.address?.slice(0, 6)}...{wallet.address?.slice(-4)}
            </span>
          ) : (
            'Connect Wallet'
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        <div className="max-w-4xl mx-auto p-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>

      {/* Bottom Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass h-20 px-6 flex items-center justify-between border-t border-white/5 z-40">
        <NavItem view={View.DASHBOARD} icon="dashboard" label="Home" />
        <NavItem view={View.REWARDS} icon="account_balance_wallet" label="Yield" />
        <NavItem view={View.NETWORK} icon="hub" label="Team" />
        <NavItem view={View.SUPPORT} icon="help_outline" label="Info" />
      </nav>

      {/* Material Icons for simplicity in CDN environment */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
    </>
  );
};
