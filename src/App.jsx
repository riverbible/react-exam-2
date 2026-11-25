import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: '계란 30개판',
    count: 1
  },
  {
    id: 1,
    isDone: false,
    content: '우유 1L',
    count: 2
  },
  {
    id: 2,
    isDone: false,
    content: '고구마 1kg',
    count: 3
  },
]

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      count: 1
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId, updates) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == targetId
          ? { ...todo, ...updates }
          : todo
      )
    )
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
