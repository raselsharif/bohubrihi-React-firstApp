import React from "react";


// functional component

function Person(props){
    return(
      <div>
        <h1>Name: {props.name} <br /> Age: {props.age}</h1>
      </div>
    );
    // return React.createElement('div',null, React.createElement('h1',null , "My name is Rasel"))
  }
//    export default Person;

