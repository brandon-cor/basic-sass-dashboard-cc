// dummy bank account data -- swap this out with real API calls later

export const accounts = [
  { id: 1, name: 'Checking', institution: 'Chase Bank', balance: 4823.47, type: 'checking', last4: '4291' },
  { id: 2, name: 'Savings', institution: 'Chase Bank', balance: 18320.00, type: 'savings', last4: '8847' },
  { id: 3, name: 'Credit Card', institution: 'Amex', balance: -1240.55, type: 'credit', last4: '3302' },
];

export const metrics = {
  totalBalance: 21902.92,
  monthlyIncome: 6500.00,
  monthlyExpenses: 3847.23,
  savingsRate: 40.8, // percentage
  netWorthChange: 1240.55, // vs last month
};

export const transactions = [
  { id: 1, date: '2026-03-30', description: 'Whole Foods Market', category: 'Groceries', amount: -87.43, accountId: 1 },
  { id: 2, date: '2026-03-29', description: 'Direct Deposit - Employer', category: 'Income', amount: 3250.00, accountId: 1 },
  { id: 3, date: '2026-03-28', description: 'Netflix', category: 'Subscriptions', amount: -15.99, accountId: 3 },
  { id: 4, date: '2026-03-27', description: 'Shell Gas Station', category: 'Transport', amount: -54.20, accountId: 1 },
  { id: 5, date: '2026-03-26', description: 'Spotify', category: 'Subscriptions', amount: -9.99, accountId: 3 },
  { id: 6, date: '2026-03-25', description: 'Amazon', category: 'Shopping', amount: -124.00, accountId: 3 },
  { id: 7, date: '2026-03-24', description: 'Transfer to Savings', category: 'Transfer', amount: -1000.00, accountId: 1 },
  { id: 8, date: '2026-03-24', description: 'Transfer from Checking', category: 'Transfer', amount: 1000.00, accountId: 2 },
  { id: 9, date: '2026-03-22', description: 'Chipotle', category: 'Dining', amount: -14.75, accountId: 3 },
  { id: 10, date: '2026-03-21', description: 'AT&T Wireless', category: 'Bills', amount: -85.00, accountId: 1 },
  { id: 11, date: '2026-03-20', description: 'Freelance Payment', category: 'Income', amount: 800.00, accountId: 1 },
  { id: 12, date: '2026-03-18', description: 'Trader Joe\'s', category: 'Groceries', amount: -62.11, accountId: 1 },
  { id: 13, date: '2026-03-15', description: 'Direct Deposit - Employer', category: 'Income', amount: 3250.00, accountId: 1 },
  { id: 14, date: '2026-03-14', description: 'Electric Bill', category: 'Bills', amount: -112.50, accountId: 1 },
  { id: 15, date: '2026-03-12', description: 'Uber', category: 'Transport', amount: -22.40, accountId: 3 },
];

// monthly spending by category for the chart
export const spendingByMonth = [
  { month: 'Oct', income: 6200, expenses: 3600 },
  { month: 'Nov', income: 6200, expenses: 4100 },
  { month: 'Dec', income: 7800, expenses: 5200 },
  { month: 'Jan', income: 6500, expenses: 3900 },
  { month: 'Feb', income: 6500, expenses: 3600 },
  { month: 'Mar', income: 6500, expenses: 3847 },
];

export const spendingByCategory = [
  { category: 'Housing', amount: 1500, color: '#6366f1' },
  { category: 'Groceries', amount: 420, color: '#22c55e' },
  { category: 'Transport', amount: 310, color: '#f59e0b' },
  { category: 'Dining', amount: 280, color: '#ef4444' },
  { category: 'Bills', amount: 620, color: '#3b82f6' },
  { category: 'Subscriptions', amount: 87, color: '#a855f7' },
  { category: 'Shopping', amount: 630, color: '#ec4899' },
];
