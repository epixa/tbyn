import React from 'react';
import { shallow } from 'enzyme';

import Transactions from '../../../../src/components/transactions';

describe('<Transactions/>', () => {
  it('renders null if active is not true', () => {
    const component = shallow(<Transactions />);
    expect(component.node).to.equal(null);
  });
  it('renders the component if active is true', () => {
    const component = shallow(<Transactions active />);
    expect(component.node).not.to.equal(null);
  });
});
