import React from 'react';
import { shallow } from 'enzyme';

import AddAccount from '../../../../src/components/add-account';
import AddAccountButton from '../../../../src/containers/add-account/button';
import AddAccountForm from '../../../../src/containers/add-account/form';

describe('<AddAccount/>', () => {
  it('renders button', () => {
    const component = shallow(<AddAccount />);
    expect(component.contains(<AddAccountButton />)).to.equal(true);
  });
  it('does not render form by default', () => {
    const component = shallow(<AddAccount />);
    expect(component.contains(<AddAccountForm />)).not.to.equal(true);
  });
  it('renders form when active', () => {
    const component = shallow(<AddAccount active />);
    expect(component.contains(<AddAccountForm />)).to.equal(true);
  });
});
