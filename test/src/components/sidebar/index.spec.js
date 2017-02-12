import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../../../../src/components/sidebar';

describe('<Sidebar/>', () => {
  it('does not have sidebar-collapsed class if not collapsed', () => {
    const component = shallow(<Sidebar />);
    expect(component).not.to.have.className('sidebar-collapsed');
  });
  it('has the sidebar-collapsed class if collapsed', () => {
    const component = shallow(<Sidebar collapsed />);
    expect(component).to.have.className('sidebar-collapsed');
  });
});
