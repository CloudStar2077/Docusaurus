import styles from './contact.module.css';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact me</h2>
          <p className={styles.intro}>Include the Information like:</p>
          <ul className={styles.list}>
            <li>Feel free to reach out with job offers or opportunities like...</li>
            <li>What role are you looking for?</li>
            <li>How you will contribute to the new team.</li>
            <li>Are you open for remote work or even relocate?</li>
          </ul>
        </div>
        <div className={styles.right}>
          <p className={styles.tagline}>Looking forward to hearing from you!</p>
          <div className={styles.links}>
            <a href="mailto:deine@email.de" className={styles.link}>
              <span className={styles.linkIcon}>✉️</span>
              deine@email.de
            </a>
            <a href="https://linkedin.com/in/deinprofil" target="_blank" rel="noreferrer" className={styles.link}>
              <span className={styles.linkIcon}>🔗</span>
              Profile Page
            </a>
          </div>
        </div>
      </div>
      <div className={styles.scrollTop}>
        <button onClick={scrollToTop} className={styles.scrollBtn} aria-label="Scroll to top">
          ↑
        </button>
      </div>
      <div className={styles.footer}>
        <p>© {new Date().getFullYear()} Vladimir Ivić</p>
        <a href="#">Legal notice</a>
      </div>
    </section>
  );
}
