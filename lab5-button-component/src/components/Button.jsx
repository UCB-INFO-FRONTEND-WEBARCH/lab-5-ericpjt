jsximport React from 'react';
import './Button.css';

/**
 * Lab 5 - Button Component
 *
 * Props:
 * - children (ReactNode): Button label or content (required)
 * - variant ("fill" | "outline" | "text"): Visual style of the button
 * - size ("small" | "medium" | "large"): Button size
 * - color ("primary" | "secondary"): Theme color
 * - disabled (boolean): Whether the button is disabled
 * - icon (ReactNode): Optional icon displayed before the text
 * - onClick (function): Click event handler
 */

const Button = ({
  children,
  variant = "fill",
  size = "medium",
  color = "primary",
  disabled = false,
  icon = null,
  onClick
}) => {
  // Build the CSS classes dynamically based on props
  const classes = [
    "button",
    `variant-${variant}`,
    `size-${size}`,
    `color-${color}`,
    disabled ? "disabled" : ""
  ].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
