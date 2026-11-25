import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = () => {
  return (
    <div className='TodoList'>
      <h4>Todo List </h4>
      <input type="text" placeholder='검색어를 입력하세요' />
      <div className="todos-wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}

export default TodoList
