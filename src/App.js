import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/lists")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        <h2>React App</h2>
      </div>
    );
  }
}

export default App;
