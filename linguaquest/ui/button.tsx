import { ImageProps } from "next/image";
import React, { ReactElement } from "react";
import { Icon } from "react-feather";

type BtnVariant =
  | "primary"
  | "secondary"
  | "outlined"
  | "btn-loading"
  | "btn-danger"
  | "btn-warning"
  | "btn-success";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  icon?: ReactElement<Icon>;
  image?: ReactElement<ImageProps>;
  className?: string;
  color?: string;
}

export default function Button({
  variant = "primary",
  icon: Icon,
  className,
  color,
  image,
  ...props
}: BtnProps) {
  return (
    <button className={`button ${variant} ${className}`} {...props}>
      {Icon && <span className={`button-icon-span ${color}`}>{Icon}</span>}

      {image && <div> {image} </div>}
      <span className={`button-text-span ${color}`}>{props.children}</span>
    </button>
  );
}
