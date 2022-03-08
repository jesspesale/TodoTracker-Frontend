import React from 'react'

export default function Todo({todo}) {
  return (
    <div>
        <h4>{todo.title}</h4>
        {todo.list_items.map(item => {
            return <li key={item.id}>{item.description}</li>
        })}
    </div>
  )
}
