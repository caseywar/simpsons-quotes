import React from 'react';
import SimpsonsQuote from '../../containers/SimpsonsQuote';
import styles from './App.css'

export default function App() {
  return (
    <div className={styles.appSection}>
    <SimpsonsQuote />
    </div>
  );
}
