import {UPTADE_VALUE, SAVE_TODO} from "./actionTypes";

export const uptadeValue = value => {
  return {
    type : UPTADE_VALUE,
    payload: value //Lo necesita el reducer para trabajar
  };
};

export const saveTodo = value => {
  return {
    type : SAVE_TODO,
    payload: value //Lo necesita el reducer para trabajar
  };
};
