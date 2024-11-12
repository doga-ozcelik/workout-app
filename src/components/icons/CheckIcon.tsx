import React from "react";

interface CheckIconProps {
  color?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({ color = "#5453E3" }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.83333L4.33333 11L11 1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default CheckIcon;
