import {useEffect, useRef, useState} from 'react';
import styles from './header.module.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header oben immer anzeigen
      if (currentScrollY <= 20) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Mobile-Menü geöffnet -> Header sichtbar lassen
      if (menuOpen) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Nach unten scrollen -> verstecken
      if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      }

      // Nach oben scrollen -> wieder anzeigen
      if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    setHidden(false);
  };

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.inner}>
        <nav
          id="main-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
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