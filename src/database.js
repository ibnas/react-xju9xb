import React, { useState } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Button, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  collapse: {
    overflow: 'hidden'
  },
  collapseContent: {
    display: props => {
      return props.open ? 'hidden' : 'block';
    }
  }
}));

export default function Database() {
  const classes = useStyles();
  let [open, setOpen] = useState(true);

  return (
    <Box className={classes.collapse}>
      <Box
        className={classes.collapseContent}
        border={1}
        borderColor="blue"
        borderRadius="5px"
        bgcolor="#f2f5f9"
      >
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="server" variant="outlined" />
          <TextField id="filled-basic" label="user" variant="outlined" />
          <TextField id="outlined-basic" label="password" variant="outlined" />
          <Button variant="contained" color="primary">
            Set
          </Button>
        </form>
      </Box>
      <span onClick={() => setOpen(!open)}>{open ? 'open' : 'close'}</span>
    </Box>
  );
}

