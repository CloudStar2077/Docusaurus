import { useEffect, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 100);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.inner}>
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
