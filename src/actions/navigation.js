export const SHOW_BUDGET = 'SHOW_BUDGET';
export const SHOW_REPORTS = 'SHOW_REPORTS';
export const SHOW_TRANSACTIONS = 'SHOW_TRANSACTIONS';

export function navigateToBudget() {
  return {
    type: SHOW_BUDGET,
  };
}

export function navigateToReports() {
  return {
    type: SHOW_REPORTS,
  };
}

export function navigateToTransactions() {
  return {
    type: SHOW_TRANSACTIONS,
  };
}
