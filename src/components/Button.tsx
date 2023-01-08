import React, { forwardRef } from "react";
import clx from "classnames";
const Button = forwardRef<
  any,
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clx(
        "rounded-full bg-scGreen p-2 px-6 text-white shadow-sm active:opacity-80 disabled:cursor-not-allowed disabled:opacity-75",
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
