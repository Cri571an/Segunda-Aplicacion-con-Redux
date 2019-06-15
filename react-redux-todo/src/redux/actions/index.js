import {UPTADE_VALUE, SAVE_TODO} from "./actionTypes"; //Importamos types

export const uptadeValue = value => { //Funcion
  return {
    type : UPTADE_VALUE,
    payload: value //Lo necesita el reducer para trabajar
  };
};

export const saveTodo = value => { //Funcion
  return { //Objeto 
    type : SAVE_TODO,
    payload: null //Lo necesita el reducer para trabajar
  };
};
