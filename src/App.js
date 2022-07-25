import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

view = (member) => {
  if(member === "mother") {
    window.location.href = "http://localhost:3001/mother";

  } else if(member === "father") {
    window.location.href = "http://localhost:3001/father";

  } else {
    window.location.href = "http://localhost:3001/baby";

  }
}

render() {

  return (

    <div className="App">
      <header className="App-header">
       <h1>FAMILY TREE</h1>
       <button class="link" onClick={(event) => {event.preventDefault()
        this.view("mother")
       }}>Mother</button>
       <br/>
       <button class="link" onClick={(event) => {event.preventDefault()
        this.view("father")
       }}>Father</button>
       <br/>
       <button class="link" onClick={(event) => {event.preventDefault()
        this.view("baby")
       }}>Baby</button>

      </header>
    </div>
  );
  }
}

export default App;
