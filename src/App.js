import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { createElement } from 'react';

// import Person from './components/Person.js';
import Book from './components/Book.js'

function App(){
  return(
    <div className="App">
      <h1>Book List</h1>
      <hr />
      <Book bookName= "Bela Furabar Age" writter="Arif Azad"/>
      <Book bookName= "Golpo Gulo Onnorom" writter="Arif Azad"/>
      <Book bookName= "Jobab" writter="Arif Azad"/>
      <Book bookName= "Paradoxical Sazid" writter="Arif Azad"/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, this is my first react project</h1>
//       <Person/>
//     </div>
//   );
//   // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hello"), <Person />);
// }

// Class component
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, this is my first react project</h1>
//         <Person name= "Rasel" age = "26" />
//         <Person name="Rahat" age = "26"/>
//         <Person name="Raju" age = "26"/>
//         <Person name="Nayem" age = "26"/>
//       </div>
//     );
//   }
// }

export default App;
