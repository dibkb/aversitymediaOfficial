import React from "react";
export const MenuIcon = React.forwardRef(
  (props, ref: React.Ref<SVGSVGElement>) => {
    return (
      <svg
        width="32"
        height="10"
        viewBox="0 0 32 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H31"
          stroke="#200E26"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 9L31 9"
          stroke="#200E26"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);
MenuIcon.displayName = "MenuIcon";

export const MenuIconActive = React.forwardRef(
  (props, ref: React.Ref<SVGSVGElement>) => {
    return (
      <svg
        width="32"
        height="10"
        viewBox="0 0 32 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1H31"
          stroke="#200E26"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 9H31"
          stroke="#200E26"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);
MenuIconActive.displayName = "MenuIconActive";
