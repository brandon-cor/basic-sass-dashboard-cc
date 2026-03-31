import React from 'react';

const navItems = [
  { label: 'Overview', icon: '⊞', active: true },
  { label: 'Accounts', icon: '🏦', active: false },
  { label: 'Transactions', icon: '↕', active: false },
  { label: 'Budgets', icon: '◎', active: false },
  { label: 'Reports', icon: '▤', active: false },
  { label: 'Settings', icon: '⚙', active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 text-white flex flex-col min-h-screen shrink-0">
      {/* logo / brand */}
      <div className="px-6 py-5 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-sm">F</div>
          <span className="font-semibold text-lg tracking-tight">FinanceCC</span>
        </div>
        <p className="text-gray-400 text-xs mt-1">Personal Banking</p>
      </div>

      {/* nav links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? 'bg-indigo-600 text-white font-medium'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="text-base leading-none">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* user profile at bottom */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center text-sm font-semibold">B</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Brandon</p>
            <p className="text-xs text-gray-400 truncate">brandon@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
