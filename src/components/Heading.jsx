import React from "react";

const sizes = {
  s: "text-[28px] font-extrabold md:text-[26px] sm:text-2xl",
  md: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  xs: "text-xs font-bold",
  lg: "text-[44px] font-bold md:text-[40px] sm:text-[34px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Heading;
