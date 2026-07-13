import styles from './footer.module.css';
import Link from '@docusaurus/Link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.portfolioFooter}>
      <div className={styles.inner}>
        <button
  type="button"
  className={styles.scrollBtn}
  onClick={scrollToTop}
  aria-label="Scroll to top"
>
  <img
    src="/Docusaurus/img/arrow-up.svg"
    alt=""
    className={styles.arrow}
  />
</button>

        <div className={styles.bottom}>
          <p className={styles.copy}>
  © Vladimir Ivić {new Date().getFullYear()}
</p>

          <Link
  to="/legal-notice"
  className={styles.legal}
>
  Legal notice
</Link>
        </div>
      </div>
    </footer>
  );
}