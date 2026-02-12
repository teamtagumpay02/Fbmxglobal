
import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Rewards } from './components/Rewards';
import { Network } from './components/Network';
import { Support } from './components/Support';
import { Loader } from './components/Loader';
import { NotificationToast } from './components/NotificationToast';
import { View, WalletState, UserStats, Notification } from './types';

// FIX: Extend the global Window interface to include the ethereum property used by Web3 wallets
declare global {
  interface Window {
    ethereum?: any;
  }
}

const MOCK_STATS: UserStats = {
  activeDeposit: 2500.50,
  dailyPassiveRewards: 12.45,
  totalEarnings: 345.20,
  pendingRewards: 45.15,
  referralCount: 12,
  teamVolume: 15400.00
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isLoading, setIsLoading] = useState(true);
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    chainId: null,
    balance: '0.00',
    isConnected: false
  });
  const [stats, setStats] = useState<UserStats>(MOCK_STATS);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Initialize App
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const addNotification = (type: Notification['type'], message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const connectWallet = async () => {
    // FIX: window.ethereum is now recognized thanks to the global declaration above
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        
        setWallet({
          address: accounts[0],
          chainId: parseInt(chainId, 16),
          balance: '1.24 BNB', // Mocking balance for demonstration
          isConnected: true
        });
        
        addNotification('success', 'Wallet connected successfully!');
      } catch (error) {
        addNotification('error', 'Connection failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      addNotification('info', 'MetaMask not detected. Please install it.');
    }
  };

  const collectRewards = async () => {
    addNotification('pending', 'Transaction pending... Please confirm in wallet.');
    
    // Simulate smart contract interaction
    setTimeout(() => {
      setStats(prev => ({
        ...prev,
        totalEarnings: prev.totalEarnings + prev.pendingRewards,
        pendingRewards: 0
      }));
      addNotification('success', 'Rewards collected successfully!');
    }, 3000);
  };

  if (isLoading && !wallet.isConnected) {
    return <Loader message="Accessing FBMX Network..." />;
  }

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard stats={stats} wallet={wallet} />;
      case View.REWARDS:
        return <Rewards stats={stats} onCollect={collectRewards} />;
      case View.NETWORK:
        return <Network stats={stats} />;
      case View.SUPPORT:
        return <Support />;
      default:
        return <Dashboard stats={stats} wallet={wallet} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Layout 
        currentView={currentView} 
        setView={setCurrentView} 
        wallet={wallet} 
        onConnect={connectWallet}
      >
        {renderContent()}
      </Layout>
      
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-72">
        {notifications.map(n => (
          <NotificationToast key={n.id} notification={n} />
        ))}
      </div>
    </div>
  );
};

export default App;
