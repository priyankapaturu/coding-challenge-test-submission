import { ButtonType, ButtonVariant } from "@/types";
import React, { FunctionComponent } from "react";

import $ from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  loading = false,
}) => {
  // Compose className with variant
  const classNames = [$.button];
  if (variant === "primary") classNames.push($.primary);
  else if (variant === "secondary") classNames.push($.secondary);

  return (
    <button
      className={classNames.join(" ")}
      type={type}
      onClick={onClick}
      disabled={loading}
    >
      {loading && (
        <span data-testid="loading-spinner" className={$.spinner}>
          {/* You can style this spinner or add any spinner SVG/icon */}⏳
        </span>
      )}
      {!loading && children}
    </button>
  );
};

export default Button;
