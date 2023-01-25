import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  CircleBorder22: "rounded-radius22",
};
const variants = {
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineWhiteA700: "outline outline-[1px] outline-white_A700 text-white_A700",
  FillOrangeA200: "bg-orange_A200 text-bluegray_900",
  FillOrange100: "bg-orange_100 text-bluegray_900",
};
const sizes = {
  sm: "p-[12px]",
  md: "pl-[15px] py-[15px]",
  lg: "p-[16px]",
  xl: "pl-[18px] py-[18px]",
  "2xl": "sm:pl-[20px] pl-[22px] py-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8", "CircleBorder22"]),
  variant: PropTypes.oneOf([
    "FillBluegray900",
    "OutlineWhiteA700",
    "FillOrangeA200",
    "FillOrange100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillBluegray900",
  size: "md",
};

export { Button };
