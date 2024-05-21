import React, { useRef,useState } from 'react';

function ChangeBgColor(){
  let divRef = useRef(null);
  

  function handleClick(){
    if(divRef.current){
      divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === "blue" ? "green" : "blue"
    }
  }
  return(
    <>
    <div
    ref = {divRef}
    onClick = {handleClick}
    style={{
            width:"200px", 
            height:"200px", 
            border:"1px solid black", 
            backgroundColor:"blue", 
            color:"white"
          }}
    >Click me to change color</div>
    </>

  )
};

export default ChangeBgColor;
