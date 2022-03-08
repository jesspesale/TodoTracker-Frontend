import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchTodos } from '../redux/todoActions';
import Todo from './Todo';

export default function TodoList() {
  const todos = useSelector(state => state);
  // basically replaces mapStateToProps
  const dispatch = useDispatch()
  // basically replaces mapDispatchToProps

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  // console.log(todos)

  return (
  <div>
    <h2>Todo Lists</h2>
    {/* {renderTodos()} */}
    {todos && todos.map(todo => {
      return <Todo todo={todo} key={todo.id}/>
    })}
  </div>
  )
}
