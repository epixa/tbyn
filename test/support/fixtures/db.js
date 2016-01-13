'use strict';

import { fromJS } from 'immutable';

export default fromJS({
  "accounts": [
    {
      "id": "123",
      "name": "Joint Spend",
      "type": "checking",
      "on_budget": true,
      "closed": false
    },
    {
      "id": "124",
      "name": "Joint Growth",
      "type": "savings",
      "on_budget": false,
      "closed": false
    },
    {
      "id": "125",
      "name": "Old Spend",
      "type": "checking",
      "on_budget": true,
      "closed": true
    },
    {
      "id": "126",
      "name": "Old Growth",
      "type": "savings",
      "on_budget": false,
      "closed": true
    }
  ],
  "categories": [
    {
      "id": "234",
      "name": "Everyday Expenses",
      "active": true
    }
  ],
  "payees": [
    {
      "id": "345",
      "name": "Amazon"
    }
  ],
  "transactions": [
    {
      "id": "456",
      "account": "123",
      "payee": "345",
      "date": "2016-01-02",
      "memo": "",
      "check": "",
      "amount": 12345,
      "completed": false
    }
  ]
});