import React from 'react';
import { shallow } from 'enzyme';

import Reports from '../../../../src/components/reports';

describe('<Reports/>', () => {
  it('renders null if active is not true', () => {
    const component = shallow(<Reports />);
    expect(component.node).to.equal(null);
  });
  it('renders the component if active is true', () => {
    const component = shallow(<Reports active />);
    expect(component.node).not.to.equal(null);
  });
});
