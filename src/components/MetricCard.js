import React from 'react';

// formats a dollar amount -- negative values go red, positive go green (for delta displays)
function formatCurrency(value, showSign = false) {
  const abs = Math.abs(value);
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(abs);
  if (showSign) return (value >= 0 ? '+' : '-') + formatted;
  return value < 0 ? '-' + formatted : formatted;
}

export default function MetricCard({ title, value, delta, deltaLabel, prefix, suffix, isCurrency = true, highlight }) {
  const isPositiveDelta = delta >= 0;

  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm border ${highlight ? 'border-indigo-200' : 'border-gray-100'}`}>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">
        {prefix && <span className="text-lg">{prefix}</span>}
        {isCurrency ? formatCurrency(value) : value}
        {suffix && <span className="text-base font-medium text-gray-500 ml-1">{suffix}</span>}
      </p>
      {delta !== undefined && (
        <p className={`text-xs mt-2 font-medium ${isPositiveDelta ? 'text-green-600' : 'text-red-500'}`}>
          {isPositiveDelta ? '↑' : '↓'} {formatCurrency(Math.abs(delta), false)}{' '}
          <span className="text-gray-400 font-normal">{deltaLabel || 'vs last month'}</span>
        </p>
      )}
    </div>
  );
}
