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
      <span className="field-label">{children}</span>
      <input type="hidden" {...input} />
      <div className="date-field-container">
        <DatePicker readOnly dateFormat="MM/DD/YYYY" selected={moment(input.value)} onChange={changeHandler(input)} />
      </div>
    </label>
    {meta.touched && meta.error && <div className="form-field-error">{meta.error}</div>}
  </div>
);

DateField.propTypes = {
  children: PropTypes.node.isRequired,
  changeHandler: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default DateField;
