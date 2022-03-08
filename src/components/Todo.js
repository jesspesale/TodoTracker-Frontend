import React from 'react'

export default function Todo({todo, key}) {
  return (
    <div>
        <h2>{todo.title}</h2>
        {todo.list_items.map(item => {
            return <li key={item.id}>{item.description}</li>
        })}
    </div>
  )
}
