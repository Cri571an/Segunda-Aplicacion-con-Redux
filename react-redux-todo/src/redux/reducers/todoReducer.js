import { UPTADE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from "../actions/actionTypes";

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
    return state.value ? { //Operador ternario es como un if else
      ...state, //State actualizado
      value: '',
      todos: [...state.todos, {value: state.value, completed:false}], //Arreglo de la lista
    } : state

    case DELETE_TODO:
    return {
      ...state,
      todos: state.todos.filter((_, i) => i !== action.payload)
    }

    case TOGGLE_COMPLETED:
    const todos= state.todos;
    todos[action.payload].completed = !todos[action.payload].completed;
    return {
      ...state,
      todos
    }
    default:
    return state;
  }
}
