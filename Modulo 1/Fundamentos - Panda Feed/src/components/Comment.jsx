import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeCount() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://i.imgur.com/xYXGtns.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcus Blackmore</strong>
              <time dateTime="2022-05-11 08:13:30">há 1 hora</time>
            </div>

            <button title='Deletar comentario' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount} title='Aplaudir'>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}