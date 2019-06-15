import {UPTADE_VALUE} from "./actionTypes";

export const uptadeValue = value => {
  return {
    type : UPTADE_VALUE,
    payload: value
  };
};
