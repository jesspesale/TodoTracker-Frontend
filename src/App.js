import React from 'react'
import './App.css'
import {connect} from "react-redux"
import {fetchLists} from "./redux/listActions"
import { ADD_LIST } from './redux/constants'
import ListsContainer from './containers/ListsContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchLists({type: ADD_LIST,  })
  }
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
export default connect(null, {fetchLists})(App)
