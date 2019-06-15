import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import {connect} from 'react-redux';
import * as actions from './redux/actions';

const TodoList = props => {
  const { todos, toggleCompleted, deleteTodo } = props;
  return(
  <List>
  {todos.map((todo, index) => (
      <ListItem dense button key={index} onClick={() => toggleCompleted(index)}>
        <Checkbox checked={todo.completed}/>
        <ListItemText primary={todo.value}/>
          <ListItemSecondaryAction>
            <IconButton onClick={() => deleteTodo(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    )
  )}
  </List>
)
}
const mapStateToProps = ({todoReducer}) => {
  const {todos} = todoReducer;
  return {todos};
};

export default connect(mapStateToProps, actions)(TodoList);
