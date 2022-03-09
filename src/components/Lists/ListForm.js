import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../redux/listActions";


class ListForm extends React.Component {

    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }

  render(){
    return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)}/>
          </form>
      </div>
    )
  }

}

export default ListForm