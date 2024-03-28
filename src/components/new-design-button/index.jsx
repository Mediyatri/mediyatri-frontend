import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    black_900: "border-black-900 border border-solid text-black-900",
  },
  fill: {
    light_blue_900: "bg-light_blue-900",
    gray_900: "bg-gray-900 text-white-A700",
    deep_orange_50: "bg-deep_orange-50 text-yellow-900",
    white_A700: "bg-white-A700 text-light_blue-900",
    amber_A400_51: "bg-amber-A400_51 text-lime-900",
    amber_A400: "bg-amber-A400 text-gray-900_01",
    blue_A700: "bg-blue-A700",
  },
};
const sizes = {
  lg: "h-[48px] px-6 text-base",
  md: "h-[44px] px-5 text-base",
  sm: "h-[32px] px-3 text-xs",
  xs: "h-[20px] px-1",
};

const Button2 = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "light_blue_900",
    "gray_900",
    "deep_orange_50",
    "white_A700",
    "amber_A400_51",
    "amber_A400",
    "blue_A700",
  ]),
};

export { Button2 };
