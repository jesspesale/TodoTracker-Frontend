import React from 'react'
import './App.css'
import {connect} from "react-redux"
import {fetchLists} from "./redux/listActions"
import { ADD_LIST } from './redux/constants'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchLists({type: ADD_LIST,  })
  }
  render(){
    return (
        <div>
              App
        </div>
    );
  }
}

  // connects the component to our store
export default connect(null, {fetchLists})(App)
