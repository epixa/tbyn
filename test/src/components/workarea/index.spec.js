import React from 'react';
import { shallow } from 'enzyme';

import Workarea from '../../../../src/components/workarea';
import Budget from '../../../../src/containers/budget';
import Reports from '../../../../src/containers/reports';
import Transactions from '../../../../src/containers/transactions';

describe('<Workarea/>', () => {
  it('contains the budget section', () => {
    const component = shallow(<Workarea />);
    expect(component.contains(<Budget />)).to.equal(true);
  });
  it('contains the reports section', () => {
    const component = shallow(<Workarea />);
    expect(component.contains(<Reports />)).to.equal(true);
  });
  it('contains the transactions section', () => {
    const component = shallow(<Workarea />);
    expect(component.contains(<Transactions />)).to.equal(true);
  });
});
