import React from "react";

const Button = ({
  handleButton,
  buttonText,
  icon,
  fontWeight,
  fontSize,
  fontColor,
  paddingY,
  paddingX,
  backgroundColor,
  borderWidth,
  width,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-full ${paddingX ? paddingX : "px-3"} ${
        paddingY ? paddingY : "py-1 pb-2"
      } ${fontWeight ? fontWeight : "font-normal"} ${
        fontSize ? fontSize : "text-xl"
      } ${fontColor ? fontColor : "text-white"} ${
        backgroundColor ? backgroundColor : "bg-white"
      } ${borderWidth ? borderWidth : "border-2"}  ${width ? width : "w-full"}`}
      onClick={handleButton}
    >
      {icon ?? icon}
      {buttonText}
    </button>
  );
};

export default Button;
