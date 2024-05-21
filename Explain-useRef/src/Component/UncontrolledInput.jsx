import React, { useRef,useState } from 'react';

function UncontrolledInput(){
  let inputRef = useRef(null);
  let [, forceUpdate] = useState(0);
  function handlechange(){
    forceUpdate(inputRef.current.value);
    console.log(inputRef.current.value);
  }
  return(
    <>
    <input
    ref = {inputRef}
    type="text"
    onChange={handlechange}
    />
    <p>Current Value: {inputRef.current ? inputRef.current.value : ""}</p>
    </>
  )
};

export default UncontrolledInput;
