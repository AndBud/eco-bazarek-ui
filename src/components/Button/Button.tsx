import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./Button.styles.css";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: string;
  variant?: "contained" | "text" | "icon";
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    disabled,
    children,
    variant = "contained",
    type,
    ...other
  } = props;
  return (
    <button
      className={clsx(
        className,
        "Button-root",
        variant,
        disabled && "disabled"
      )}
      {...other}
    >
      {children}
    </button>
  );
};
