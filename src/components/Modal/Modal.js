import React from "react";
import Button from "../Button/Button";

const Modal = ({
  confirmButtonText,
  confirmButtonHandler,
  cancelButtonText,
  cancelButtonHandler,
  isOpen,
  title,
  alertType,
}) => {
  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex justify-center items-center">
        <div className="bg-white py-5 px-10 rounded-3xl">
          <div
            className={`text-lg ${
              alertType === "danger" ? "text-red-500" : "text-themeColor"
            }   font-medium text-center mb-5`}
          >
            {title}
          </div>
          <div className="flex flex-row justify-center gap-5">
            {confirmButtonText ? (
              <Button
                buttonText={confirmButtonText}
                backgroundColor="bg-themeColor"
                handleButton={confirmButtonHandler}
              />
            ) : null}
            {cancelButtonText ? (
              <Button
                buttonText={cancelButtonText}
                handleButton={cancelButtonHandler}
                fontColor="text-themeColor"
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
