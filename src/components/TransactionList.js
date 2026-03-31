import React, { useState } from 'react';
import { transactions } from '../data/dummy';

const categoryColors = {
  Income:        'bg-green-100 text-green-700',
  Groceries:     'bg-yellow-100 text-yellow-700',
  Dining:        'bg-orange-100 text-orange-700',
  Transport:     'bg-blue-100 text-blue-700',
  Bills:         'bg-red-100 text-red-700',
  Subscriptions: 'bg-purple-100 text-purple-700',
  Shopping:      'bg-pink-100 text-pink-700',
  Transfer:      'bg-gray-100 text-gray-600',
};

function formatCurrency(value) {
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.abs(value));
  return (value >= 0 ? '+' : '-') + formatted;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function TransactionList() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(transactions.map((t) => t.category)))];

  const filtered = filter === 'All' ? transactions : transactions.filter((t) => t.category === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Recent Transactions</h2>
        {/* category filter pills */}
        <div className="flex gap-1.5 flex-wrap justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
                filter === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide">
              <th className="text-left px-5 py-3 font-medium">Date</th>
              <th className="text-left px-5 py-3 font-medium">Description</th>
              <th className="text-left px-5 py-3 font-medium hidden sm:table-cell">Category</th>
              <th className="text-right px-5 py-3 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">{formatDate(tx.date)}</td>
                <td className="px-5 py-3.5 text-gray-800 font-medium">{tx.description}</td>
                <td className="px-5 py-3.5 hidden sm:table-cell">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[tx.category] || 'bg-gray-100 text-gray-600'}`}>
                    {tx.category}
                  </span>
                </td>
                <td className={`px-5 py-3.5 text-right font-semibold tabular-nums ${tx.amount >= 0 ? 'text-green-600' : 'text-gray-800'}`}>
                  {formatCurrency(tx.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-8 text-sm">No transactions in this category.</p>
        )}
      </div>
    </div>
  );
}
