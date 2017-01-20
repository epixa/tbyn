import React from 'react';
import { shallow } from 'enzyme';

import Budget from '../../../../src/components/reports';

describe('<Budget/>', () => {
  it('renders null if active is not true', () => {
    const component = shallow(<Budget />);
    expect(component.node).to.equal(null);
  });
  it('renders the component if active is true', () => {
    const component = shallow(<Budget active />);
    expect(component.node).not.to.equal(null);
  });
});
