import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import { SyntheticEvent } from "react";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

// ------------------

interface Props {
  value: Date | undefined;
  minDate: Date;
  placeholder: string;
  onChange: (date: Date | null, event?: SyntheticEvent<any, Event>) => void;
  label?: string;
  id?: string;
}

// ------------------

export default function CustomDatePicker({
  onChange,
  value,
  minDate,
  placeholder,
  label,
  id,
}: Props) {
  return (
    <div className="custom-date-picker">
      <DatePicker
        {...{
          id,
          onChange,
          minDate,
          // Add more properties here if needed
          // as well as in Props
        }}
        selected={value}
        placeholderText={placeholder}
        ariaLabelledBy={`${id}-label`}
      />
      {label && (
        <label id={`${id}-label`} htmlFor={id} className="floating-always">
          {label}
        </label>
      )}
    </div>
  );
}
