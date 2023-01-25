import React from "react";
const variantClasses = {
  h1: "font-extrabold sm:text-[34px] md:text-[40px] text-[44px]",
  h2: "font-extrabold sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-bold text-[16px]",
  h5: "font-normal text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
