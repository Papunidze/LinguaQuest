import Button from "@/ui/button";
import { ReactNode } from "react";
import { Icon, Loader } from "react-feather";

type FormProps = {
  form: ReactNode;
  onSubmit: () => void;
  submitButtonLabel?: string;
  submitButtonProps?: object;
  isLoading?: boolean;
  btnStyle?: string;
  Icon?: Icon;
};

export const Form = ({
  form,
  onSubmit,
  submitButtonProps,
  submitButtonLabel,
  btnStyle,
  isLoading,
  Icon,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        {form}
        <Button
          disabled={isLoading}
          className={`mt-2 ${btnStyle}  ${
            isLoading &&
            " !bg-gray-400 !bg-opacity-50 !text-opacity-50 pointer-events-none "
          }`}
          type="submit"
          {...submitButtonProps}
        >
          {isLoading && <Loader stroke="white" className="animate-spin " />}
          {submitButtonLabel || "Submit"}
        </Button>
      </div>
    </form>
  );
};
