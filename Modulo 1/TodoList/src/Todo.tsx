import React from 'react'
import { useState } from 'react'
import styles from './Todo.module.css'
import { Trash } from 'phosphor-react'

interface TodoProps {
  todo: {
    id: number
    title: string
    isCompleted: boolean
  },
  handleDelete: (id: number) => void
}


const Todo = ({ todo, handleDelete }: TodoProps) => {
  const [checked, setChecked] = useState(false)

  function handleCheck() {
    setChecked(!checked)
  }

  function handleDeleteTodo() {
    handleDelete(todo.id)
  }

  return (
    <div className={styles.todo}>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <p style={{ textDecoration: checked ? 'line-through' : 'none'}}>Lorem ipsum dolor sit amet.</p>
      <button type="button" onClick={handleDeleteTodo}>
        <Trash size="1.25rem" />
        </button>
    </div>
  )
}

export default Todo