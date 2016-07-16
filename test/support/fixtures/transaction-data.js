const data = {
  'id': '456',
  'account': '123',
  'payee': '345',
  'date': '2016-01-02',
  'memo': '',
  'check': '',
  'amount': 12345,
  'completed': false,
};

export default data;

export const requiredTransactionData = {
  'id': '456',
};

export const initialTransactionData = {
  ...data,
  payee: '0',
  completed: true,
};
