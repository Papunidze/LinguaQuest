import React, { ReactElement } from "react";
import { Icon } from "react-feather";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement<Icon>;
}

const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <button
      className="rounded-md bg-gray-50 text-typography-secondary hover:bg-gray-200 p-2 flex gap-2"
      {...props}
    >
      {icon}
      {props.children}
    </button>
  );
};

export default IconButton;
