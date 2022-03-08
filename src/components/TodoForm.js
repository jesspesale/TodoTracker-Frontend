import React, { useState } from "react";
import { useDispatch } from "react-redux";


export default function TodoForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault()

    }

  return (
    <div>
        <form>
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </form>
    </div>
  )
}
