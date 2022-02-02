var periods = [
  {amount: 30 * 24 * 60 * 60 * 1000, str: "month"},
  {amount: 7 * 24 * 60 * 60 * 1000, str: "week"},
  {amount: 24 * 60 * 60 * 1000, str: "day"},
  {amount: 60 * 60 * 1000, str: "hour"},
  {amount: 60 * 1000, str: "minute"},
];

export function formatTime(timeCreated) {
  const diff = Date.now() - new Date(timeCreated);
  const period = periods.find(({amount}) => diff > amount);
  if (!period) return 'Just now';
  const count = Math.floor(diff / period.amount);
  return `${count} ${period.str}${count > 1 ? 's' : ''} ago`;
}
