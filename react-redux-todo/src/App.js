import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from "./TodoForm";

const App = () => {
  return (
    <React.Fragment>

    <Typography align = 'center' variant='h2' gutterBottom>
      To-Do App Redux
    </Typography>

    <Grid container justify="center">
    <Grid item>
    <TodoForm />
    </Grid>
    </Grid>

    <Grid container justify="center">
      <Grid item md={8}>
      </Grid>
    </Grid>
  </React.Fragment>
  );
}

export default App;
