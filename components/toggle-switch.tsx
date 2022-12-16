import { ReactElement } from "react";

// -----------------------

interface Props {
  id: string;
  label: string | ReactElement;
  value: 1 | 0;
  className?: string;
  onChange?: (e: any) => void;
}

// -----------------------

export default function ToggleSwitch({
  id,
  label,
  value,
  onChange = (e) => {},
  className = "",
}: Props) {
  return (
    <label
      id={`${id}-label`}
      htmlFor={id}
      className={`toggle-switch ${className} ${id}`}
    >
      {label}
      <input
        type="checkbox"
        className="toggle-switch__input"
        id={id}
        name={id}
        value={value}
        checked={!!value}
        onChange={onChange}
      />
      <div className="toggle-switch__fill" />
    </label>
  );
}
