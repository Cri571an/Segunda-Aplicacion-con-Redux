import { UPTADE_VALUE, SAVE_TODO  } from "../actions/actionTypes";

const INITIAL_STATE = {
  value: "",
  todos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPTADE_VALUE:
      return{
        ...state,  //creando una copia del state
        value: action.payload
      }
    case SAVE_TODO:
    return state.value ? {
      ...state, //State actualizado
      value: '',
      todos: [...state.todos, {value: state.value, completed:false}], //Arreglo de la lista
    } : state
    default:
    return state;
  }
}
