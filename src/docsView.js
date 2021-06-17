import React, { useState } from 'react';
import './style.css';
import { Grid, Paper, Box, ClickAwayListener } from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles
} from '@material-ui/core/styles';
import Database from './database';
import data from './data';
import styles from './styles.module.css';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: 'unset'
      }
    }
  }
});

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
  // paperRoot: {
  //   backgroundColor: 'unset'
  // }
}));

export default function DocsView(props) {
  const classes = { ...useStyles(theme) };
  // class={`${styles.paper}`} ...styles,
  let docs = props.docs ? props.docs : data.docs;
  return (
    <>
      <ThemeProvider theme={theme}>
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
                  <Select>
                    <Paper
                      // classes={{
                      //   root: classes.paperRoot
                      // }}
                      variant="outlined"
                      className={classes.paper}
                    >
                      {doc.data.name}
                    </Paper>
                  </Select>
                </Grid>
              );
            })}
          </Grid>
        </Box>{' '}
      </ThemeProvider>
    </>
  );
}
//

let Select = props => {
  let [mounseEnter, setMouseEnter] = useState(false);
  let [selected, setSelected] = useState(false);
  let [mouseIn, setMouseIn] = useState(false);

  let style = () => {
    return {
      backgroundColor: mouseIn || selected ? '#cccccc' : 'white'
    };
  };

  return (
    <ClickAwayListener onClickAway={() => setSelected(false)}>
      <div
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
        onClick={() => setSelected(true)}
        style={style()}
      >
        {props.children}
      </div>
    </ClickAwayListener>
  );
};
