import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

type BtnVariant =
  | "primary"
  | "secondary"
  | "outlined"
  | "btn-loading"
  | "btn-danger"
  | "btn-warning"
  | "btn-success";

type Icons = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  icon?: Icons;
  className?: string;
  color?: string;
}

export default function Button({
  variant = "primary",
  icon: Icon,
  className,
  color,
  ...props
}: BtnProps) {
  return (
    <button className={`button ${variant} ${className}`} {...props}>
      {Icon && <Icon className={`button-icon-span ${color}`} />}
      <span className={`button-text-span ${color}`}>{props.children}</span>
    </button>
  );
}
