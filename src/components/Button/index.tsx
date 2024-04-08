"use client";

import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  outlined?: boolean;
  link?: boolean;
}

const Button = ({ outlined = false, link = false, ...props }: ButtonProps) => {
  if (outlined) {
    return (
      <button
        {...props}
        className={`bg-transparent hover:bg-graceGreen text-graceGreen font-semibold hover:text-graceBlack py-2 px-4 border border-graceGreen hover:border-transparent rounded ${props.className}`}
      >
        {props.children}
      </button>
    );
  }

  if (link) {
    return (
      <button
        {...props}
        className={`bg-transparent hover:text-blue text-graceGreen font-bold py-2 px-4 ${props.className}`}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={`bg-graceGreen hover:bg-graceGreen text-graceBlack font-bold py-2 px-4 rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
