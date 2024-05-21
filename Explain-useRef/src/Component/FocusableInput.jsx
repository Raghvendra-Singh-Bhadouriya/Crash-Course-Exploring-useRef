import React, { useEffect, useRef } from 'react';

function FocusableInput(){
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[])

  return(
    <>
    <input
    ref={inputRef}
    type="text"
    placeholder="focus on mount"
    />
    </>
  ) 
};

export default FocusableInput;