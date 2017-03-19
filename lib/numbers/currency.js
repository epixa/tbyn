const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const numberFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2
});

export function formatCurrency(amountInCents) {
  return numberFormatter.format(amountInCents / 100);
}

export function formatCurrencyWithDollarSign(amountInCents) {
  return dollarFormatter.format(amountInCents / 100);
}
