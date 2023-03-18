import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState } from 'react'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Nice post!'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedAtRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleted = comments.filter(comment => { return comment !== commentToDelete })

    setComments(commentsWithoutDeleted)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('O comentário não pode ficar vazio.')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} hasBorder={true} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedAtRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>
          }
          else if (item.type === 'link') {
            return (
              <p key={index}>
                <a href={item.content} target='_blank'>
                  life could be a dream
                </a>
              </p>

            )
          }
        }
        )}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  );
}