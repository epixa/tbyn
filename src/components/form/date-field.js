import moment from 'moment';
import DatePicker from 'react-datepicker';
import React, { PropTypes } from 'react';

const DateField = ({
  children,
  changeHandler,
  input,
  meta,
}) => (
  <div>
    <label>
      {children}
      <input type="hidden" {...input} />
      <DatePicker readOnly dateFormat="MM/DD/YYYY" selected={moment(input.value)} onChange={changeHandler(input)} />
    </label>
    {meta.touched && meta.error && <div>{meta.error}</div>}
  </div>
);

DateField.propTypes = {
  children: PropTypes.node.isRequired,
  changeHandler: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default DateField;
