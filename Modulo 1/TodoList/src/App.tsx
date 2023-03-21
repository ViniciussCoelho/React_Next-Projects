import styles from './App.module.css'
import './global.css'
import Top from './Top'
import Todo from './Todo'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      isCompleted: false
    },
  ])

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleCreateTodo = (newTodoTitle: string) => {
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <Top handleCreateTodo={handleCreateTodo} />
      <div className={styles.container}>
        <div className={styles.label}>
          <div className={styles.created}>
            <h2>Tarefas criadas</h2>
            <p>0</p>
          </div>
          <div className={styles.concluded}>
            <h2>Concluídas</h2>
            <p>0 de 5</p>
          </div>
        </div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default App
