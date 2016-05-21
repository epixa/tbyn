'use strict';

import React from 'react';
import { mount, shallow } from 'enzyme';

import AddAccountButton from '../../../../src/components/add-account/button';

describe('<AddAccountButton/>', () => {
  it('says "Add Account" by default', () => {
    const component = shallow(<AddAccountButton/>);
    expect(component.text()).to.equal('Add Account');
  });
  it('says "Add" when truncated', () => {
    const component = shallow(<AddAccountButton truncated={true}/>);
    expect(component.text()).to.equal('Add');
  });
  it('calls onClick when clicked', () => {
    const onClick = sinon.stub();
    const component = mount(<AddAccountButton onClick={onClick}/>);
    component.find('button').simulate('click');
    expect(onClick).to.have.been.called;
  });
});
