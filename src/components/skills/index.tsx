import styles from './skills.module.css';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Static Site Generator', icon: '⚙️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Shell Scripting', icon: '💻' },
  { name: 'YAML', icon: '📄' },
  { name: 'Container', icon: '🐳' },
  { name: 'CI/CD with GitHub Actions', icon: '🔄' },
  { name: 'IT Security', icon: '🛡️' },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
          {skills.map((skill: Skill) => (
            <div key={skill.name} className={styles.card}>
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.label}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
