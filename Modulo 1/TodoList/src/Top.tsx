import React from 'react'
import styles from './Top.module.css'
import logo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'

const Top = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />

      <div className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar<PlusCircle size="1.375rem" /></button>
      </div>
    </div>
  )
}

export default Top