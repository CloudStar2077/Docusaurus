import styles from './contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact me</h2>
          <ul className={styles.list}>
            <li>📍 Hamburg, Germany</li>
            <li>📧 <a href="mailto:vladimir.ivic@gmx.de">vladimir.ivic@gmx.de</a></li>
            <li>🐙 <a href="https://github.com/CloudStar2077" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <div className={styles.right}>
          <p className={styles.tagline}>Looking forward to hearing from you!</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>© {new Date().getFullYear()} Vladimir Ivic · Built with Docusaurus</p>
      </div>
    </section>
  );
}
