import React from "react";

const InputField = ({
  type,
  inputName,
  value,
  onChange,
  placeholder,
  width,
}) => {
  return (
    <input
      className={`bg-white text-md font-normal p-2 px-5 text-black rounded-full mb-5 ${
        width ? width : "w-3/4"
      }`}
      type={type}
      value={value}
      onChange={onChange}
      name={inputName}
      placeholder={placeholder}
    />
  );
};

export default InputField;
