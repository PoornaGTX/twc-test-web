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
  ADD_CONTACT_BEGIN,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT_BEGIN,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }

  if (action.type === DISPLAY_MISMATCH_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Password mismatch",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  //logout user

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  //add contact

  if (action.type === ADD_CONTACT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_CONTACT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Contact added Successful Redirecting...",
    };
  }

  if (action.type === ADD_CONTACT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  //get all contacts

  if (action.type === GET_ALL_CONTACTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      contacts: action.payload.allContacts,
    };
  }

  //upadate contact

  if (action.type === UPDATE_CONTACT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_CONTACT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Error",
    };
  }
  if (action.type === UPDATE_CONTACT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Contact Updated!",
    };
  }

  if (action.type === SET_EDIT_CONTACT) {
    const { name, value } = action.payload.e.target;

    const editContact = state.contacts.map((item) =>
      item._id === action.payload._id && name
        ? { ...item, [name]: value }
        : item
    );

    return {
      ...state,
      contacts: editContact,
    };
  }

  //delete contact

  if (action.type === DELETE_CONTACT_BEGIN) {
    return { ...state, isLoading: true };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
