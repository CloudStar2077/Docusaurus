import styles from './contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact me</h2>

          <ul className={styles.list}>
            <li>
              Feel free to reach out with job offers or opportunities
              like...
            </li>
            <li>
              DevSecOps Engineer, Cloud Engineer, System Engineer
            </li>
            <li>I am open for remote work</li>
          </ul>
        </div>

        <div className={styles.right}>
          <p className={styles.tagline}>
            Looking forward to hearing from you!
          </p>

          <div className={styles.links}>
            <a
              href="mailto:vladimir.ivic@gmx.de"
              className={styles.link}
            >
              <span
                className={`${styles.iconCell} ${styles.mailIcon}`}
                aria-hidden="true"
              >
                ✉️
              </span>

              <span>vladimir.ivic@gmx.de</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vladimir-ivic-9144b7332/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <span className={styles.iconCell}>
                <img
                  src="/Docusaurus/img/linkedin.svg"
                  alt=""
                  aria-hidden="true"
                  className={styles.linkedinIcon}
                />
              </span>

              <span>Profile Page</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}