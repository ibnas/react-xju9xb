import React, { useState } from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Database from './database';
import DocsView from './docsView.js';
import DocsList from './docsList.js';
import Preview from './preview.js';
import Editor from './editor.js';
import { Grid } from '@material-ui/core';

export default function App() {
  let [preview, setPreview] = useState(null);

  let onSelect = item => {
    setPreview(item);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Database />
        </Grid>
        <Grid item xs={2}>
          <DocsList onSelect={onSelect} />{' '}
        </Grid>
        <Grid item xs={10}>
          <DocsView /> <Preview item={preview} /> <Editor item={preview} />{' '}
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} />
      </Grid>
    </>
  );
}
//
