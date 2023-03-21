import React from 'react'
import styles from './Top.module.css'
import logo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

type Todo = {
  id: number,
  title: string,
  isCompleted: boolean
}

type Props = {
  handleCreateTodo: (title: string) => void
}

const Top: React.FC<Props> = ({ handleCreateTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodoTitle) return;
    handleCreateTodo(newTodoTitle);
    setNewTodoTitle('');
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTodoTitle}
          onChange={handleInputChange}
        />
        <button type="submit">Criar<PlusCircle size="1.375rem" /></button>
      </form>
    </div>
  )
}

export default Top