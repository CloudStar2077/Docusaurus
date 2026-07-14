import {useEffect, useRef, useState} from 'react';
import styles from './header.module.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Ganz oben oder bei geöffnetem Mobilmenü:
      // Header immer anzeigen.
      if (currentScrollY <= 20 || menuOpen) {
        setHidden(false);
      } else if (scrollDifference > 4) {
        // Nach unten scrollen:
        // Header ausblenden.
        setHidden(true);
      } else if (scrollDifference < -4) {
        // Nach oben scrollen:
        // Header wieder anzeigen.
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) {
        return;
      }

      window.requestAnimationFrame(updateHeader);
      ticking.current = true;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

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