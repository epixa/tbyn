import React from 'react';
import { mount } from 'enzyme';

import AllAccountsLink from '../../../../../../src/components/navigation/section/all-accounts-link';

describe('<AllAccountsLink/>', () => {
  it('has a full label when not truncated', () => {
    const component = mount(<AllAccountsLink />);
    expect(component).to.contain.text('All Accounts');
  });
  it('has a condensed label when truncated', () => {
    const component = mount(<AllAccountsLink truncated />);
    expect(component).not.to.contain.text('All Accounts');
    expect(component).to.contain.text('Accounts');
  });
  it('includes total in dollars when not truncated', () => {
    const component = mount(<AllAccountsLink total={6} />);
    expect(component).to.contain.text('$0.06');
  });
  it('does not include total when truncated', () => {
    const component = mount(<AllAccountsLink total={6} truncated />);
    expect(component).not.to.contain.text('$0.06');
  });
});
