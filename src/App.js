import React from 'react'
import './App.css'
import {connect} from "react-redux"
import ListsContainer from './containers/ListsContainer'

class App extends React.Component {


  render(){
    return (
        <div>
              App
              <ListsContainer/>
        </div>
    );
  }
}

  // connects the component to our store
export default connect()(App)
