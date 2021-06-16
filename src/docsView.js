import React from 'react';
import './style.css';
import { Grid, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Database from './database';
import data from './data';
import styles from './styles.module.css'

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
  const classes = { ...useStyles(), ...styles};

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
                <Paper className={styles.paper} class={`${styles.paper}`}>{doc.data.name}</Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
//

let Select = props => {
  let [mounseEnter, setMouseEnter] = useState(false);
  let [mounseLeave, setMouseLeave] = useState(false);
  let [mounseIn, setMouseIn] = useState(false);

  let style = {
    backgroundColor: mouseIn ? '#cccccc' : 'unset'
  };

  return (
    <div onMouseEnter={()=>setMouseIn(true)} onMouseLeave={()=>setMouseIn(false)} style={} >
      {props.children}
    </div>
  );
};
