import React, { Component } from 'react'
import ListForm from '../components/Lists/ListForm'
import Lists from '../components/Lists/Lists'
import { connect } from 'react-redux'
import { fetchLists } from '../redux/listActions'
import {ADD_LIST} from "../constants.js"


class ListsContainer extends Component {

  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    return (
      <div>
        <ListForm />
        <Lists />
      </div>
    );
  }
}

    const mapStateToProps = (state) => {
        return {
            lists: state.lists
        }
    }

export default connect(mapStateToProps, {fetchLists})(ListsContainer)