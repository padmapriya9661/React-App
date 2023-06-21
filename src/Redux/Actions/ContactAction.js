import { ActionTypes } from "../Constants/actionTypes";

export const setContacts = (contacts) => {
  return {
    type: ActionTypes.SET_CONTACTS,
    payload: contacts,
  };
};

export const setSelectedContacts = (contact) => {
  return {
    type: ActionTypes.SET_SELECTED_CONTACTS,
    payload: contact,
  };
};
