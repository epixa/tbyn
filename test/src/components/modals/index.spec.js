import React from 'react';
import { shallow } from 'enzyme';

import Modals from '../../../../src/components/modals';

describe('<Modals/>', () => {
  it('renders null if currentModal is not truthy', () => {
    const component = shallow(<Modals />);
    expect(component.node).to.equal(null);
  });
  it('renders the component if currentModal is truthy', () => {
    const component = shallow(<Modals currentModal="something" />);
    expect(component.node).not.to.equal(null);
  });
});
