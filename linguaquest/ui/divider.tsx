import React from "react";

const Divider = ({ className = "", ...props }) => {
  return (
    <hr
      className={`h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full ${className}`}
      {...props}
    />
  );
};

export default Divider;
