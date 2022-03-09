import React, { Component } from 'react'
import ListForm from '../components/Lists/ListForm'
import Lists from '../components/Lists/Lists'


export default class ListsContainer extends Component {
  render() {
    return (
      <div>
        <ListForm/>
        <Lists/>
      </div>
    )
  }
}
