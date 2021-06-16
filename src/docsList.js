import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Box } from '@material-ui/core';
import data from './data';

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

export default function DocsList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  let docs = props.docs ? props.docs : data.docs;

  let getFolderView = (folder, index) => {
    return (
      <TreeItem nodeId={index} label={folder.data.name}>
        {folder.data.content.map((c, index1) =>
          getView(c, index + ',' + index1)
        )}
      </TreeItem>
    );
  };

  let getDocView = (doc, index) => {
    return <TreeItem nodeId={'' + index} label={doc.data.name} />;
  };

  let getView = (doc, index) => {
    if (doc.type == 'folder') return getFolderView(doc, index);
    else if (doc.type == 'file') return getDocView(doc, index);
    return false;
  };

  let view = docs.map((doc, index) => {
    return getView(doc, index);
  });

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
    console.log('expanded');
    console.log(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    console.log('selected');
    console.log(nodeIds);
  };
  return (
    <Box
      border={1}
      borderColor="blue"
      borderRadius="5px"
      bgcolor="#e6f1ff"
      className={classes.box}
    >
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        {view}
      </TreeView>
    </Box>
  );
}
