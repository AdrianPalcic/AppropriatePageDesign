"use client";

import React from "react";

interface ButtonProps {
  text: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text }, ref) => {
    return (
      <button ref={ref} className="btn">
        {text}
      </button>
    );
  }
);

Button.displayName = "Button"; // Important for debugging

export default Button;
