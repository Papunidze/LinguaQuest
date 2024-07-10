import React, { useState } from "react";

const Path = ({ d, className }: { d: string; className: string }) => (
  <path
    d={d}
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    className={className}
  />
);

interface MenuToggleProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
export const MenuToggle = ({ setIsOpen, isOpen }: MenuToggleProps) => {
  const toggle = () => setIsOpen(!isOpen);

  return (
    <button
      onClick={toggle}
      className="p-0 bg-transparent border-none outline-none cursor-pointer"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
          className={`transition-all duration-300 ease-in-out`}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          className={`transition-opacity duration-100 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <Path
          d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
          className={`transition-all duration-300 ease-in-out`}
        />
      </svg>
    </button>
  );
};
