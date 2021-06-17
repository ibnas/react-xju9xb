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
            {docs.map((doc, index) => {
              return (
                <Grid item>
                  <Select>
                    <Paper
                      // classes={{
                      //   root: classes.paperRoot
                      // }}
                      variant="outlined"
                      className={classes.paper}
                      tabindex={index}
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

  // document.addEventListener(
  //   'keydown',
  //   event => {
  //     const keyName = event.key;

  //     if (keyName === 'Control') {
  //       // do not alert when only Control key is pressed.
  //       return;
  //     }

  //     if (event.ctrlKey) {
  //       // Even though event.key is not 'Control' (e.g., 'a' is pressed),
  //       // event.ctrlKey may be true if Ctrl key is pressed at the same time.
  //       alert(`Combination of ctrlKey + ${keyName}`);
  //     } else {
  //       alert(`Key pressed ${keyName}`);
  //     }
  //   },
  //   false
  // );

  // document.addEventListener(
  //   'keyup',
  //   event => {
  //     const keyName = event.key;

  //     // As the user releases the Ctrl key, the key is no longer active,
  //     // so event.ctrlKey is false.
  //     if (keyName === 'Control') {
  //       alert('Control key was released');
  //     }
  //   },
  //   false
  // );
  return (
    <ClickAwayListener onClickAway={() => setSelected(false)}>
      <div
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
        onClick={() => setSelected(true)}
        onKeyPress={e => console.log(e.key + ' key')}
        style={style()}
      >
        {props.children}
      </div>
    </ClickAwayListener>
  );
};
