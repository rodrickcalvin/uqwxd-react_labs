import React from 'react';
import { useDispatch } from 'react-redux';


const MyButton = (props) => {
  let dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(props.counterAction)}>{props.buttonName}</button>
  )
}

export default MyButton;