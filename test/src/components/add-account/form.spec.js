import React from 'react';
import { shallow } from 'enzyme';

import AddAccountForm from '../../../../src/components/add-account/form';

describe('<AddAccountForm/>', () => {
  let args;
  beforeEach(() => {
    args = {
      handleCancel: sinon.stub(),
      handleSubmit: sinon.stub(),
      dateChangeHandler: sinon.stub(),
      typeChangeHandler: sinon.stub(),
      submitting: false,
      fields: { balance: {}, date: {}, name: {}, on_budget: {}, type: {} },
    };
  });

  it('invokes handleSubmit on submit', () => {
    const component = shallow(<AddAccountForm {...args} />);
    component.find('form').simulate('submit');
    expect(args.handleSubmit).to.have.been.calledOnce;
  });

  it('has an enabled submit button', () => {
    const component = shallow(<AddAccountForm {...args} />);
    const button = component.find('button[type="submit"]');
    expect(button).not.to.be.disabled();
    expect(button).to.be.contain('Create account');
  });

  it('disables submit while submitting', () => {
    args.submitting = true;
    const component = shallow(<AddAccountForm {...args} />);
    const button = component.find('button[type="submit"]');
    expect(button).to.be.disabled();
    expect(button).to.be.contain('Creating account...');
  });
});
