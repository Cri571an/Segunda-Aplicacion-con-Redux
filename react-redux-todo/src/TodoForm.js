import React from "react";
import TextField from '@material-ui/core/TextField';
import * as actions from "./redux/actions";
import { connect } from "react-redux";

const TodoForm = ({value, saveTodo, uptadeValue}) => (
  <form onSubmit={e =>{
    e.preventDefault();
    saveTodo();
  }}
  >
  <TextField type='Text' margin='normal' placeholder='Add todo' onChange={e => uptadeValue(e.target.value)} value={value }/>
  </form>
);

const mapStateToProps = ({todoReducer}) => {
  console.log(todoReducer);
  const { value } = todoReducer;
  return {value};
};

export default connect(mapStateToProps, actions)(TodoForm); //Currying
