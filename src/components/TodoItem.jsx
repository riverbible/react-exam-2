import React from 'react'
import './TodoItem.css'

const TodoItem = () => {
  return (
    <div className='TodoItem'>
      <input type="checkbox" />
      <div className="content">Todo...</div>
      <div className="date">Date</div>
      <div className="btns-wrap">
        <button className='updateBtn'>수정</button>
        <button className='deleteBtn'>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
