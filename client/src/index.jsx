import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {name: '', description: ''}
  }

  onChange(e) {
    this.setState = { [e.target.name] : e.target.value };
  }

  submit(e) {
    e.preventDefault();
    axios.post('/', this.state)
      .then((data)=> {
        {data}
      })
  }

  render() {
    return (
    <div>
      <h3>🐮 Cows List 🌼</h3>
      <form id="form">
        <h5>Name:</h5>
        <textarea name='name' onChange={this.change} value={this.state.name} cols="50" rows="1"></textarea><p></p>
        <h5>Description:</h5>
        <textarea name='description' onChange={this.change} value={this.state.description} cols="50" rows="3"></textarea>
        <p></p>
        <input onClick={this.submit} id ="submitInfo" type="submit" />
      </form>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);