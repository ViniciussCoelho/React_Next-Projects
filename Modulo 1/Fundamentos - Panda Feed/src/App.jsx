import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Vinicius Coelho',
      avatar: 'https://github.com/viniciusscoelho.png',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'Watch my new video' },
      { type: 'link', content: 'https://youtu.be/SzAmAWO9dwg' },
    ],
    publishedAt: new Date('2023-03-12 08:13:30'),
  },
  {
    id: 2,
    author: {
      name: 'Dio Brando',
      avatar: 'https://i.imgur.com/SZfCEGr.png',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'Watch my new video' },
      { type: 'link', content: 'https://youtu.be/SzAmAWO9dwg' },
    ],
    publishedAt: new Date('2023-03-11 12:13:30'),
  }
]



function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post author={post.author} content={post.content} publishedAt={post.publishedAt} key={post.id} />
          })}
        </main>
      </div>
    </div>
  );
}

export default App
