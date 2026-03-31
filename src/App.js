import React from 'react';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import AccountCards from './components/AccountCards';
import TransactionList from './components/TransactionList';
import SpendingChart from './components/SpendingChart';
import CategoryBreakdown from './components/CategoryBreakdown';
import { metrics } from './data/dummy';

export default function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* top header */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Overview</h1>
            <p className="text-sm text-gray-400">March 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
              Export
            </button>
            <button className="text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              + Add Account
            </button>
          </div>
        </header>

        <div className="px-8 py-6 space-y-8">
          {/* key metrics row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Total Balance"
              value={metrics.totalBalance}
              delta={metrics.netWorthChange}
              highlight
            />
            <MetricCard
              title="Monthly Income"
              value={metrics.monthlyIncome}
              delta={300}
            />
            <MetricCard
              title="Monthly Expenses"
              value={metrics.monthlyExpenses}
              delta={-247}
              deltaLabel="vs last month"
            />
            <MetricCard
              title="Savings Rate"
              value={metrics.savingsRate}
              isCurrency={false}
              suffix="%"
              delta={2.3}
              deltaLabel="vs last month"
            />
          </div>

          {/* linked accounts */}
          <AccountCards />

          {/* charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <SpendingChart />
            </div>
            <div>
              <CategoryBreakdown />
            </div>
          </div>

          {/* transactions */}
          <TransactionList />
        </div>
      </main>
    </div>
  );
}
