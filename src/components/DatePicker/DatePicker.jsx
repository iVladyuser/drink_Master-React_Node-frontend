import DatePicker from 'react-datepicker';
import React, { forwardRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerGlobalStyles } from './DatePicker.styled';
import { FormField } from 'components/SignUpSignInForms/SignUpForm/Sign.styled';

const StyledDatePicker = forwardRef(({ field, form }, ref) => {
  return (
    <>
      <DatePicker
        ref={ref}
        selected={field.value}
        onChange={date => form.setFieldValue(field.name, date)}
        placeholderText="dd/mm/yyyy"
        showIcon
        toggleCalendarOnIconClick
        icon={
          <svg
            className="icon"
            style={{ right: 24, top: 20, fontSize: 18 }}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z"
              stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3333 1.66669V5.00002"
              stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66675 1.66669V5.00002"
              stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 8.33331H17.5"
              stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        customInput={<FormField />}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
      />
      <DatePickerGlobalStyles />
    </>
  );
});

export default StyledDatePicker;
