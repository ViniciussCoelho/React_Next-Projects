import styles from './Header.module.css'
import logo from '../assets/panda-feed-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Panda Feed" />
      <h2>Panda Feed</h2>
    </header>
  );
}