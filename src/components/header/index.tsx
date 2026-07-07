import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/Docusaurus/" className={styles.logo}>
          <img src="/Docusaurus/img/docusaurus.png" alt="Home" className={styles.logoImg} />
        </a>
        <nav className={styles.nav}>
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
