import {useEffect, useRef, useState} from 'react';
import styles from './header.module.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      /* Oben und bei geöffnetem Menü immer sichtbar */
      if (currentScrollY <= 20 || menuOpenRef.current) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      /* Nach unten scrollen */
      if (currentScrollY > previousScrollY) {
        setHidden(true);
      }

      /* Sobald nach oben gescrollt wird */
      if (currentScrollY < previousScrollY) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
    setHidden(false);
  };

  return (
    <header
      className={`${styles.header} ${
        hidden ? styles.hidden : ''
      }`}
    >
      <div className={styles.inner}>
        <nav
          id="main-navigation"
          className={`${styles.nav} ${
            menuOpen ? styles.navOpen : ''
          }`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About me
          </a>

          <a href="#skills" onClick={closeMenu}>
            My skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            My projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ''
          }`}
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}