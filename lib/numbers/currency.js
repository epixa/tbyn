const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export function formatAsDollars(amountInCents) {
  return formatter.format(amountInCents / 100);
}
