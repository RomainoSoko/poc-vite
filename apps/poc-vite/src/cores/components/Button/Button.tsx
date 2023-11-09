import './Button.scss';
import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
}

export default function Button({children}: ButtonProps) {
  return (
    <button className={'button'}>
      { children }
    </button>
  )
}
