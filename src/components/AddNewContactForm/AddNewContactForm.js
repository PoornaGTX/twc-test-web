import React, { useState } from "react";
import Button from "../Button/Button";
import InputCheckBox from "../InputCheckBox/InputCheckBox";
import InputField from "../InputField/InputField";
import { useAppContext } from "../../context/appContext";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";

const AddNewContactForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "male",
  };

  const router = useRouter();
  const { addContact, alertText, showAlert, alertType, contacts, user } =
    useAppContext();

  const [values, setValues] = useState(initialState);
  const [isGenderMale, setIsGenderMale] = useState(true);
  const [isGenderFemale, setIsGenderFemale] = useState(false);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleGender = (value) => {
    if (value === "male") {
      setIsGenderFemale(false);
      setIsGenderMale(true);
      setValues({ ...values, gender: "male" });
    }
    if (value === "female") {
      setIsGenderFemale(true);
      setIsGenderMale(false);
      setValues({ ...values, gender: "female" });
    }
  };

  const submitHandler = () => {
    const { fullName, email, phoneNumber, gender } = values;
    if (fullName && email && phoneNumber && gender) {
      setTimeout(() => {
        router.push("/contacts");
      }, 2000);
    }
    addContact(values);
  };

  return (
    <>
      <div className="mt-20 mb-20">
        <div className="text-white text-5xl font-bold mb-20">New Contact</div>
        <div className="flex flex-row gap-10 justify-between w-full mb-4">
          <InputField
            type="text"
            inputName="fullName"
            value={values.fullName}
            onChange={handleInput}
            placeholder="full name"
          />
          <InputField
            type="email"
            inputName="email"
            value={values.email}
            onChange={handleInput}
            placeholder="Email"
          />
        </div>
        <div className="flex flex-row gap-10 justify-between w-full">
          <InputField
            type="text"
            inputName="phoneNumber"
            value={values.phoneNumber}
            onChange={handleInput}
            placeholder="Phone Number"
          />
          <div className="flex flex-row justify-between items-center space-x-5 w-3/4">
            <div className="text-white text-lg font-medium">gender</div>
            <InputCheckBox
              value="male"
              isChecked={isGenderMale}
              label="male"
              onChange={(e) => handleGender(e.target.value)}
            />
            <InputCheckBox
              value="female"
              isChecked={isGenderFemale}
              label="female"
              onChange={(e) => handleGender(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button
        buttonText={
          contacts.length > 0 ? "add contact" : "add your first contact"
        }
        backgroundColor="bg-themeColor"
        width="w-1/4"
        handleButton={submitHandler}
      />
      <Modal title={alertText} isOpen={showAlert} alertType={alertType} />
    </>
  );
};

export default AddNewContactForm;
