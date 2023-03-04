import React from 'react';

import MyButton from '../components/button';
import DivPanel from '../components/divPanel';

import { increment, decrement }from '../actions'


const MainPanel = () => {
  return (
    <>
      <h3>Use the counter below:</h3>

      <span>
          <MyButton buttonName='-' counterAction={decrement(1)} />
          <DivPanel />
          <MyButton buttonName='+' counterAction={increment(1)}/>
      </span>
    </>
  )
}

export default MainPanel;