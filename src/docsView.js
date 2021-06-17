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
  let selection = {};
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
                  <Select
                    select={t => {
                      t ? (selection[index] = index) : delete selection[index];
                      console.log(selection);
                    }}
                  >
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
  let [multiSelect, setMultiSelect] = useState(false);
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
  //       console.log(`Combination of ctrlKey + ${keyName}`);
  //     } else {
  //       console.log(`Key pressed ${keyName}`);
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
  //       console.log('Control key was released');
  //     }
  //   },
  //   false
  // );

  let keyDown = event => {
    let n = event.key;
    if (n === 'Control' || event.ctrlKey) {
      setMultiSelect(true);
    }
  };
  let keyUp = event => {
    let n = event.key;
    if (n === 'Control' || event.ctrlKey) {
      setMultiSelect(false);
    }
  };

  let select = () => {
    setSelected(!selected);
    if (props.select) props.select(selected ? true : false);
  };
  return (
    <ClickAwayListener
      onClickAway={() => {
        if (!multiSelect) {
          setSelected(false);
        }
      }}
    >
      <div
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
        onClick={select}
        onKeyDown={keyDown}
        onKeyUp={keyUp}
        style={style()}
      >
        {props.children}
      </div>
    </ClickAwayListener>
  );
};
