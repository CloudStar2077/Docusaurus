import styles from './skills.module.css';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Static Site Generator',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Shell Scripting',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg',
  },
  {
    name: 'YAML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
  },
  {
    name: 'Container',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'CI/CD with GitHub Actions',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  },
  {
    name: 'IT Security',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg',
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
          {skills.map((skill: Skill) => (
            <div key={skill.name} className={styles.card}>
              <img src={skill.icon} alt={skill.name} className={styles.icon} />
              <span className={styles.label}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
