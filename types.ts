
export interface WalletState {
  address: string | null;
  chainId: number | null;
  balance: string;
  isConnected: boolean;
}

export interface UserStats {
  activeDeposit: number;
  dailyPassiveRewards: number;
  totalEarnings: number;
  pendingRewards: number;
  referralCount: number;
  teamVolume: number;
}

export interface ReferralNode {
  address: string;
  level: number;
  volume: number;
  children?: ReferralNode[];
}

export enum View {
  DASHBOARD = 'DASHBOARD',
  REWARDS = 'REWARDS',
  NETWORK = 'NETWORK',
  SUPPORT = 'SUPPORT'
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'pending' | 'info';
  message: string;
}
