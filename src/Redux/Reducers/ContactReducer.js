import { ActionTypes } from "../Constants/actionTypes";

const initialValue = [];
const initialSelectedValue = [];

export const contactReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CONTACTS:
      return payload;
    default:
      return state;
  }
};

export const selectedContactReducer = (
  state = initialSelectedValue,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_CONTACTS:
      return payload;
    default:
      return state;
  }
};
