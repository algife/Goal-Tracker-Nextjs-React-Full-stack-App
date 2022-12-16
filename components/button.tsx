import { ReactNode } from "react";

// --------------------

interface Props {
  text?: string;
  bgColor?: string;
  onClick: (e: any) => void;
  suffixIcon?: ReactNode;
  className: string;
  disabled?: boolean;
}

// --------------------

export default function Button({
  onClick,
  text,
  bgColor,
  suffixIcon,
  className,
  disabled = false,
}: Props) {
  return (
    <button
      className={`btn ${className}`}
      style={{ backgroundColor: bgColor }}
      disabled={disabled}
      onClick={onClick}
    >
      <>
        {text && text}
        {suffixIcon && <div className="suffix-icon">{suffixIcon}</div>}
      </>
    </button>
  );
}
