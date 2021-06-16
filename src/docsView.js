import React from 'react';
import './style.css';
import { Grid, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Database from './database';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function DocsView(props) {
  const classes = useStyles();

  let docs = props.docs ? props.docs : data.docs;
  return (
    <>
      <Box
        border={1}
        borderColor="blue"
        borderRadius="5px"
        bgcolor="#e6f1ff"
        className={classes.root}
      >
        <Grid container spacing={3}>
          {docs.map(doc => {
            return (
              <Grid item>
                <Paper className={classes.paper}>{doc.data.name}</Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
//
