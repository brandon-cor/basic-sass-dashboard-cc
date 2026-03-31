import React from 'react';
import { accounts } from '../data/dummy';

const typeStyles = {
  checking: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'Checking' },
  savings:  { bg: 'bg-green-50', text: 'text-green-700', badge: 'Savings' },
  credit:   { bg: 'bg-rose-50', text: 'text-rose-700', badge: 'Credit' },
};

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export default function AccountCards() {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Your Accounts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {accounts.map((account) => {
          const style = typeStyles[account.type];
          return (
            <div key={account.id} className={`rounded-xl p-4 ${style.bg} border border-transparent`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500">{account.institution}</p>
                  <p className="font-semibold text-gray-800 mt-0.5">{account.name} ···{account.last4}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-white ${style.text}`}>
                  {style.badge}
                </span>
              </div>
              <p className={`text-xl font-bold mt-3 ${account.balance < 0 ? 'text-rose-600' : 'text-gray-900'}`}>
                {formatCurrency(account.balance)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
