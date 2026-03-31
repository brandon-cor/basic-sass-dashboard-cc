import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { spendingByCategory } from '../data/dummy';

const total = spendingByCategory.reduce((sum, c) => sum + c.amount, 0);

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-3 py-2 text-sm">
      <p className="font-semibold" style={{ color: d.color }}>{d.category}</p>
      <p className="text-gray-600">${d.amount.toLocaleString()} ({((d.amount / total) * 100).toFixed(1)}%)</p>
    </div>
  );
}

export default function CategoryBreakdown() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="mb-3">
        <h2 className="font-semibold text-gray-800">Spending by Category</h2>
        <p className="text-xs text-gray-400 mt-0.5">March 2026</p>
      </div>

      <div className="flex items-center gap-4">
        {/* donut chart */}
        <div className="shrink-0">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={spendingByCategory}
                cx="50%"
                cy="50%"
                innerRadius={36}
                outerRadius={56}
                dataKey="amount"
                paddingAngle={2}
              >
                {spendingByCategory.map((entry) => (
                  <Cell key={entry.category} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* legend */}
        <div className="flex-1 space-y-2">
          {spendingByCategory.map((cat) => (
            <div key={cat.category} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="text-xs text-gray-600">{cat.category}</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-gray-800">${cat.amount}</span>
                <span className="text-xs text-gray-400 ml-1">({((cat.amount / total) * 100).toFixed(0)}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
