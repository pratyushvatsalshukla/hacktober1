import React from 'react' ;
import { useState } from 'react';

const App = () =>{
  const [CurrentName, CurrentNameUpdate] = useState() ;
  const [fullName, setFullName] = useState() ;
  var Name = "" ;
  const inputEvent = (event) => {
  console.log(event.target.value) ;
  CurrentNameUpdate(event.target.value) ;
  };

  const onSubmit = () =>{
    // console.log(event) ;
    setFullName(CurrentName) ;
      
  };
    return(
      <>
      <div>
        <h1>Hello {fullName}</h1>
        <input type= "text" placeholder = "Enter Your Name" onChange = {inputEvent} value = {CurrentName} />
        <button onClick = {onSubmit} >  Click Me 👍 </button>
      </div>
      </>
    );
}

export default App ;
