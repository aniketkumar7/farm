import React from 'react';
import { Welcome } from './components/index';
import './main.css';

export function Main() {
  return (
    <>
      <div className="dep">less</div>
      <div className="dep-scss">less</div>
      <Welcome />
    </>
  );
}
