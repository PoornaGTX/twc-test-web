import React from "react";

const InputCheckBox = ({ isChecked, onChange, value, label }) => {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        value={value}
        class="h-5 w-5"
        checked={isChecked}
        onChange={onChange}
      />
      <div className="text-white text-lg font-medium">{label}</div>
    </label>
  );
};

export default InputCheckBox;
