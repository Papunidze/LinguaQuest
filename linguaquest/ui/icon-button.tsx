import Image from "next/image";
import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <button
      className="rounded-md bg-gray-50 text-typography-secondary hover:bg-gray-200 p-2 flex gap-2"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default IconButton;
