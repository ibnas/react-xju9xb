import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Database from './database';
import DocsView from './docsView.js';
import DocsList from './docsList.js';

export default function App() {
  return (
    <>
      {/* <Database /> */}
      {/* <DocsView></DocsView> */}
      <DocsList />
    </>
  );
}
//
