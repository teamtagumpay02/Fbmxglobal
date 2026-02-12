
import React from 'react';
import { Notification } from '../types';

export const NotificationToast: React.FC<{ notification: Notification }> = ({ notification }) => {
  const styles = {
    success: 'bg-green-500/10 border-green-500/20 text-green-400 icon:check_circle',
    error: 'bg-red-500/10 border-red-500/20 text-red-400 icon:error_outline',
    pending: 'bg-blue-500/10 border-blue-500/20 text-blue-400 icon:sync',
    info: 'bg-slate-500/10 border-slate-500/20 text-slate-400 icon:info',
  };

  const icon = styles[notification.type].split('icon:')[1];
  const classes = styles[notification.type].split('icon:')[0];

  return (
    <div className={`p-4 rounded-2xl border ${classes} shadow-2xl backdrop-blur-md animate-in slide-in-from-right-4 duration-300 flex items-center gap-3`}>
      <span className={`material-icons-outlined ${notification.type === 'pending' ? 'animate-spin' : ''}`}>
        {icon}
      </span>
      <p className="text-xs font-bold leading-tight">{notification.message}</p>
    </div>
  );
};
