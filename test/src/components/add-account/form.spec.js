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
    submitting: false,
    fields: { balance: {}, date: {}, name: {}, on_budget: {}, type: {} }
  });

  it('invokes handleSubmit on submit', () => {
    const component = shallow(<AddAccountForm {...args} />);
    component.find('form').simulate('submit');
    expect(args.handleSubmit).to.have.been.calledOnce;
  });

  it('includes error message when submit fails', () => {
    args.submitFailed = true;
    const component = shallow(<AddAccountForm {...args} />);
    expect(component).to.contain('There was an error with your form submission');
  });

  it('has an enabled submit button', () => {
    const component = shallow(<AddAccountForm {...args} />);
    const button = component.find('button[type="submit"]');
    expect(button).not.to.be.disabled();
    expect(button).to.be.contain('Submit');
  });

  it('disables submit while submitting', () => {
    args.submitting = true;
    const component = shallow(<AddAccountForm {...args} />);
    const button = component.find('button[type="submit"]');
    expect(button).to.be.disabled();
    expect(button).to.be.contain('Submitting...');
  });
});
