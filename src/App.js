import React from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import TodoList from "./components/TodoList"


class App extends React.Component {

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/lists/1")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  render(){
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <br></br>
        Home Page
        <Routes>
          <Route path="/todos" element={<TodoList/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
