import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { useAppContext } from "../../context/appContext";
import { useRouter } from "next/router";

const ContactsTable = ({ data }) => {
  const {
    getContacts,
    contacts,
    updateContact,
    setEditContact,
    deleteContact,
  } = useAppContext();

  console.log(contacts.length);

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [modalConfirmButton, setModalConfirmButton] = useState(false);
  const [modalTile, setModalTile] = useState("");
  const [alertType, setAlertType] = useState("");
  const [editContactData, setEditContactData] = useState({});
  const [deleteId, setDeleteId] = useState("");

  const onChangeInput = (e, _id) => {
    setEditContact(e, _id);
  };

  const submitData = (_id, fName) => {
    setIsEdit(true);
    const editContactRowData = contacts.find((item) => item._id === _id);

    const { fullName, phoneNumber } = editContactRowData;

    //user error handling with modal
    if (!fullName || !phoneNumber) {
      setIsOpen(true);
      setModalTile("Pleae Provide All values");
      setModalConfirmButton(false);
      setAlertType("danger");
    } else {
      setModalTile(`Do you want to update the contact ${fName}?`);
      setEditContactData(editContactRowData);
      setIsOpen(true);
      setModalConfirmButton(true);
      setAlertType("");
    }
  };

  const deleteHandler = (_id, fullName) => {
    setModalTile(`Do you want to delete the contact "${fullName}" ?`);
    setIsOpen(true);
    setModalConfirmButton(true);
    setDeleteId(_id);
  };

  const handleButton = () => {
    router.push("/contacts/new");
  };

  //update contact
  const confirmButtonHandler = () => {
    updateContact(editContactData);
    setIsOpen(false);
    setIsEdit(false);
  };

  //delete contact
  const confirmDeleteButtonHandler = () => {
    deleteContact(deleteId);
    setIsOpen(false);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between items-center mt-20 mb-10">
        <div className="text-white text-5xl font-bold">Contacts</div>
        <button
          className="text-white cursor-pointer text-xl font-normal border-2 rounded-full py-1 pb-2 px-3"
          onClick={handleButton}
        >
          add new contact
        </button>
      </div>

      <div className="p-8 pr-2 rounded-3xl bg-white mb-20">
        <div className="h-[210px] 2xxl:h-[345px] overflow-y-scroll  bg-white">
          <table className="w-full border-separate rounded-3xl">
            <thead>
              <tr className="text-left">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(({ _id, fullName, email, phoneNumber, gender }) => (
                <tr key={_id} className="h-[60px]">
                  <td>
                    {gender === "female" ? (
                      <Image
                        width="46"
                        height="24"
                        src="/images/avatarFemale.png"
                        alt="femaleAvatar"
                      />
                    ) : (
                      <Image
                        width="46"
                        height="24"
                        src="/images/avatarMale.png"
                        alt="maleAvatar"
                      />
                    )}
                  </td>
                  <td>
                    <input
                      name="fullName"
                      value={fullName}
                      type="text"
                      onChange={(e) => onChangeInput(e, _id)}
                      placeholder="Type Name"
                      className="text-md font-medium"
                    />
                  </td>
                  <td>
                    <input
                      name="email"
                      value={email}
                      type="text"
                      placeholder="Type Email"
                      className="text-md font-medium"
                      readOnly={true}
                    />
                  </td>
                  <td>
                    <input
                      name="phoneNumber"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => onChangeInput(e, _id)}
                      placeholder="Type Position"
                      className="text-md font-medium"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => submitData(_id, fullName)}
                      className="mr-5"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4958 6.925L12.4229 2.725L13.7646 1.325C14.1319 0.941667 14.5833 0.75 15.1187 0.75C15.6535 0.75 16.1045 0.941667 16.4719 1.325L17.8135 2.725C18.1809 3.10833 18.3726 3.571 18.3885 4.113C18.4045 4.65433 18.2288 5.11667 17.8615 5.5L16.4958 6.925ZM1.83333 19C1.56181 19 1.33436 18.904 1.151 18.712C0.967 18.5207 0.875 18.2833 0.875 18V15.175C0.875 15.0417 0.898958 14.9127 0.946875 14.788C0.994792 14.6627 1.06667 14.55 1.1625 14.45L11.0333 4.15L15.1063 8.4L5.23542 18.7C5.13958 18.8 5.03193 18.875 4.91246 18.925C4.79235 18.975 4.6684 19 4.54062 19H1.83333Z"
                          fill="#083F46"
                        />
                      </svg>
                    </button>
                    <button onClick={() => deleteHandler(_id, fullName)}>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.58334 19.75C2.98751 19.75 2.47762 19.538 2.05368 19.1141C1.62901 18.6894 1.41668 18.1792 1.41668 17.5833V3.5H0.333344V1.33333H5.75001V0.250001H12.25V1.33333H17.6667V3.5H16.5833V17.5833C16.5833 18.1792 16.3714 18.6894 15.9474 19.1141C15.5228 19.538 15.0125 19.75 14.4167 19.75H3.58334ZM14.4167 3.5H3.58334V17.5833H14.4167V3.5ZM5.75001 15.4167H7.91668V5.66667H5.75001V15.4167ZM10.0833 15.4167H12.25V5.66667H10.0833V15.4167Z"
                          fill="#083F46"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            title={modalTile}
            isOpen={isOpen}
            // confirmButtonHandler={() => setIsOpen(false)}
            confirmButtonHandler={
              isEdit ? confirmButtonHandler : confirmDeleteButtonHandler
            }
            confirmButtonText={modalConfirmButton && "Yes"}
            cancelButtonHandler={() => setIsOpen(false)}
            cancelButtonText="Cancel"
            alertType={alertType}
          />
        </div>
      </div>
    </>
  );
};

export default ContactsTable;
