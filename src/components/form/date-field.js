'use strict';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import React from 'react';

const TextField = ({ children, changeHandler, field }) => (
  <div>
    <label>
      {children}
      <input type="hidden" {...field} />
      <DatePicker readOnly={true} dateFormat="MM/DD/YYYY" selected={moment(field.value)} onChange={changeHandler(field)} />
    </label>
    {field.touched && field.error && <div>{field.error}</div>}
  </div>
);

export default TextField;
