import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Database from './database';
import DocsView from './docsView.js';
import DocsList from './docsList.js';
import { Box } from '@material-ui/core';

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

componentsPreview = {
  text: item => {
    return <span>{typeof item.data == 'string' ? item.data : item.type}</span>;
  }
};
export default function Preview(props) {
  const classes = useStyles();

  let item = props.item;
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
      <Comp />
    </Box>
  );
}
//
