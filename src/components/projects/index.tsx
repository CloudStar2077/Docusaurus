import Link from '@docusaurus/Link';
import styles from './projects.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: 'Juice Shop Master',
    description: 'OWASP Juice Shop vulnerability writeups covering SQL injection, password hash exposure, XSS payloads, and more.',
    tags: ['Security', 'OWASP', 'Writeups'],
    link: '/docs/juice-shop-master',
    emoji: '🧃',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My project highlights</h2>
        <div className={styles.list}>
          {projects.map((p: Project) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.emoji}>{p.emoji}</div>
                <div>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.description}</p>
                  <div className={styles.tags}>
                    {p.tags.map((t: string) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <Link to={p.link} className={styles.btn}>View project</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
