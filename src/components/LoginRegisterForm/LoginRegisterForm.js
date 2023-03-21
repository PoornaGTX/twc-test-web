import React, { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { useAppContext } from "../../context/appContext";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginRegisterForm = () => {
  const {
    registerUser,
    loginUser,
    user,
    alertText,
    showAlert,
    displayPasswordMismatch,
    getContacts,
    alertType,
  } = useAppContext();

  const router = useRouter();

  const [values, setValues] = useState(initialState);

  const [isRegister, setIsRegister] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLoginButton = () => {
    const { email, password } = values;
    loginUser({ email, password });
  };

  const handleRegisterButton = () => {
    const { email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      return displayPasswordMismatch();
    } else {
      registerUser({ email, password });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [user, router]);

  return (
    <div className="w-1/2 flex flex-col justify-center relative z-20 pl-30.5">
      <div className="text-white text-12.5 font-bold leading-18.25 mb-2 ">
        Hi there,
      </div>
      <div className="text-white text-4xl font-normal w-6/12 mb-20">
        Welcome to our contacts portal
      </div>

      <InputField
        type="email"
        inputName="email"
        value={values.email}
        onChange={handleChange}
        placeholder="e-mail"
      />

      <InputField
        type="password"
        inputName="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />

      {isRegister ? (
        <InputField
          type="password"
          inputName="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="confirm password"
        />
      ) : null}

      <div className="flex flex-row justify-start items-center gap-2 mt-10">
        <Button
          buttonText={isRegister ? "register" : "login"}
          fontSize="text-md"
          fontWeight="font-medium"
          paddingX="px-5"
          paddingY="py-0 pb-0"
          handleButton={isRegister ? handleRegisterButton : handleLoginButton}
          width="w-fit"
          backgroundColor="bg-themeColor"
        />
        {isRegister ? null : (
          <div className="text-md font-medium text-white"> or </div>
        )}
        {isRegister ? null : (
          <div
            className="text-lg font-medium text-white underline cursor-pointer"
            onClick={() => setIsRegister(!isRegister)}
          >
            Click here to Register
          </div>
        )}
      </div>
      {isRegister ? (
        <div
          className="text-lg font-medium text-white underline mt-20 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {`< Back to login`}
        </div>
      ) : null}

      <Modal title={alertText} isOpen={showAlert} alertType={alertType} />
    </div>
  );
};

export default LoginRegisterForm;
