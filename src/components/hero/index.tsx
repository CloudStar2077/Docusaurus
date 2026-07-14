import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.greeting}>Hey there 👋 I am</p>

          <h1 className={styles.name}>Vladimir Ivić</h1>

          <p className={styles.title}>DevSecOps Engineer</p>

          <div className={styles.mobilePhoto}>
            <div className={styles.photoPlaceholder}>
              <span>Photo</span>
            </div>
          </div>

          <p className={styles.bio}>
            Passionate about cybersecurity, software development, and IT
            operations. I research and document vulnerabilities, develop
            practical solutions, and enjoy solving technical challenges that
            strengthen my skills in penetration testing, secure software
            engineering, and infrastructure management. I continuously expand
            my knowledge by exploring new technologies, automation, and
            security best practices to stay up to date in the evolving IT
            landscape.
          </p>

          <a href="#contact" className={styles.cta}>
            Contact me
          </a>
        </div>

        <div className={styles.desktopPhoto}>
          <div className={styles.photoPlaceholder}>
            <span>Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}