import React from 'react';
import './style.css';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // height: 240,
    flexGrow: 1,
    maxWidth: 400
  },
  box: {
    // overflow:"scroll"
  }
});

let componentsPreview = {
  text: item => {
    return <span>{typeof item.data == 'string' ? item.data : item.type}</span>;
  }
};
export default function Preview(props) {
  const classes = useStyles();

  let item = props.item == null ? { type: 'text', data: 'data' } : props.item;
  let prev = componentsPreview[item.type]
    ? componentsPreview[item.type]
    : componentsPreview.text;
  let Comp = componentsPreview[item.type](item);
  return (
    <Box
      border={1}
      borderColor="blue"
      borderRadius="5px"
      bgcolor="#e6f1ff"
      className={classes.box}
    >
      {Comp}
    </Box>
  );
}
//
