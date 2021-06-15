import React, { useState } from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Database from './database';
import DocsView from './docsView.js';
import DocsList from './docsList.js';
import Preview from './preview.js';

export default function App() {
  let [preview, setPreview] = useState(null);

  let onSelect = item => {
    setPreview(item);
  };
  return (
    <>
      {/* <Database /> */}
      {/* <DocsView></DocsView> */}
      <DocsList onSelect={onSelect} />
      <Preview item={preview} />
      <Editor item={preview} />
    </>
  );
}
//
