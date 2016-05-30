'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import AddAccountForm from '../../../../src/components/add-account/form';

describe('<AddAccountForm/>', () => {
  let args;
  beforeEach(() => args = {
    handleCancel: sinon.stub(),
    handleSubmit: sinon.stub(),
    dateChangeHandler: sinon.stub(),
    typeChangeHandler: sinon.stub(),
    fields: { balance: {}, date: {}, name: {}, on_budget: {}, type: {} }
  });

  it('invokes handleSubmit on submit', () => {
    const component = shallow(<AddAccountForm {...args} />);
    component.find('form').simulate('submit');
    expect(args.handleSubmit).to.have.been.called;
  });

  it('includes error message when submit fails', () => {
    args.submitFailed = true;
    const component = shallow(<AddAccountForm {...args} />);
    expect(component.contains("There was an error with your form submission")).to.equal(true);
  });
});
