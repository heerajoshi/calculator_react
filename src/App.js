import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handlekey(e) {
    let inputDiv = document.getElementById("input");
    inputDiv.innerText += e.target.innerText;
  }

  evaluate(){
    let inputDiv = document.getElementById("input");
    inputDiv.innerText = eval(inputDiv.innerText);
  }

  render() {
    return (
      <div className="App">
        <div className="inputBox">
          <div id="input" class="inputText" />
        </div>
        <div className="row">
          <button className="btn" onClick={this.handlekey}>
            7
          </button>
          <button className="btn" onClick={this.handlekey}>
            8
          </button>
          <button className="btn" onClick={this.handlekey}>
            9
          </button>
          <button className="btn" onClick={this.handlekey}>
            +
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={this.handlekey}>
            4
          </button>
          <button className="btn" onClick={this.handlekey}>
            5
          </button>
          <button className="btn" onClick={this.handlekey}>
            6
          </button>
          <button className="btn" onClick={this.handlekey}>
            *
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={this.handlekey}>
            1
          </button>
          <button className="btn" onClick={this.handlekey}>
            2
          </button>
          <button className="btn" onClick={this.handlekey}>
            3
          </button>
          <button className="btn" onClick={this.handlekey}>
            /
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={this.handlekey}>
            -
          </button>
          <button className="btn" onClick={this.handlekey}>
            0
          </button>
          <button className="btn" onClick={this.handlekey}>
            .
          </button>
          <button className="btn" onClick={this.evaluate}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
