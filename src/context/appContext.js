import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  GET_ALL_CONTACTS_SUCCESS,
  UPDATE_CONTACT_BEGIN,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
  SET_EDIT_CONTACT,
  DISPLAY_MISMATCH_ALERT,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_BEGIN,
  DELETE_CONTACT_BEGIN,
} from "./action";

if (typeof window !== "undefined") {
  // Perform localStorage action
  var token = localStorage.getItem("token");
  var user = localStorage.getItem("user");
}

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  contacts: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  //request
  // authFetch.interceptors.request.use(
  //   (config) => {
  //     console.log("axios");
  //     config.headers.common["Authorization"] = `Bearer ${state.token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const displayPasswordMismatch = () => {
    dispatch({ type: DISPLAY_MISMATCH_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };

  //store user details in local storage

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  //remove user details in local storage when logout

  const removeFromTheLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  //register user

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        currentUser
      );
      const { user, token } = response.data;
      console.log(response.data);
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //login

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        currentUser
      );

      const { user, token, location } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //logOut

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromTheLocalStorage();
  };

  //add contact

  const addContact = async ({ fullName, email, phoneNumber, gender }) => {
    console.log("context", fullName, email, phoneNumber, gender);
    dispatch({ type: ADD_CONTACT_BEGIN });
    try {
      const response = await authFetch.post("/contacts", {
        fullName,
        email,
        phoneNumber,
        gender,
      });
      dispatch({
        type: ADD_CONTACT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_CONTACT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //get all contacts

  const getContacts = async () => {
    // dispatch({ type: GET_ALL_CONTACTS_BEGIN });
    try {
      const { data } = await authFetch.get("/contacts/");
      const { allContacts } = data;
      dispatch({
        type: GET_ALL_CONTACTS_SUCCESS,
        payload: { allContacts },
      });
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
    clearAlert();
  };

  //update contact

  const setEditContact = (e, _id) => {
    dispatch({ type: SET_EDIT_CONTACT, payload: { e, _id } });
  };

  const updateContact = async ({ _id, fullName, phoneNumber }) => {
    dispatch({ type: UPDATE_CONTACT_BEGIN });
    try {
      await authFetch.patch(`/contacts/update-contact/${_id}`, {
        fullName,
        phoneNumber,
      });
      dispatch({ type: UPDATE_CONTACT_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_CONTACT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteContact = async (contactId) => {
    dispatch({ type: DELETE_CONTACT_BEGIN });
    try {
      await authFetch.delete(`/contacts/delete-contact/${contactId}`);
      getContacts();
    } catch (error) {
      logoutUser();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        displayPasswordMismatch,
        registerUser,
        loginUser,
        logoutUser,
        getContacts,
        setEditContact,
        updateContact,
        addContact,
        deleteContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
