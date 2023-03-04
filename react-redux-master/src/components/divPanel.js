import React from 'react';
import { useSelector } from 'react-redux';


const DivPanel = () => {
  let counterValue = useSelector(state => state.counter)

  return (
    <p>
      The Present value on the couter is {counterValue}
    </p>
  )
}

export default DivPanel;