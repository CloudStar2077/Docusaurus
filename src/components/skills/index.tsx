import { useState } from 'react';
import styles from './skills.module.css';

interface Skill {
  name: string;
  icon: string;
  description: string[];
}

const skills: Skill[] = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: ['Semantic markup', 'Accessible structure', 'Forms and validation', 'Tables and lists'],
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: ['CSS Modules', 'Flexbox and Grid', 'Responsive layouts', 'Media queries'],
  },
  {
    name: 'Static Site Generator',
    icon: '/Docusaurus/img/docusaurus.png',
    description: ['Docusaurus', 'Markdown-based docs', 'GitHub Pages deployment', 'Custom React components'],
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: ['Security tooling', 'Port scanner', 'Hash cracker', 'SSH brute-forcer'],
  },
  {
    name: 'Shell Scripting',
    icon: '/Docusaurus/img/terminal.svg',
    description: ['Bash scripting', 'Task automation', 'System administration', 'CLI tooling'],
  },
  {
    name: 'Yaml',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
    description: ['GitHub Actions workflows', 'Docker Compose', 'Config management', 'CI/CD pipelines'],
  },
  {
    name: 'Container',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: ['Docker images', 'Multi-container apps', 'Networking', 'Volume management'],
  },
  {
    name: 'CI/CD with GitHub Actions',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
    description: ['Automated builds and tests', 'Pre-built actions', 'Push and pull request triggers', 'Automated deployments'],
  },
  {
    name: 'IT Security',
    icon: '/Docusaurus/img/security.svg',
    description: ['Penetration testing', 'OWASP Top 10', 'Vulnerability analysis', 'Burp Suite'],
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: ['Relational databases', 'SQL queries', 'SQL Injection attacks', 'Database security'],
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    description: ['LPIC-1 certified', 'System administration', 'Kali Linux', 'Shell & file management'],
  },
  {
    name: 'Windows',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
    description: ['Active Directory', 'Windows Server', 'PowerShell scripting', 'User management'],
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
          {skills.map((skill: Skill, index: number) => (
            <div
              key={skill.name}
              className={styles.card}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <div className={styles.hoverContent}>
                  <p className={styles.hoverTitle}>How I used this skill</p>
                  <ul className={styles.hoverList}>
                    {skill.description.map((d: string) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <img src={skill.icon} alt={skill.name} className={styles.icon} />
                  <span className={styles.label}>{skill.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
