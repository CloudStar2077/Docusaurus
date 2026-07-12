import styles from './skills.module.css';

interface Skill {
  name: string;
  icon: string;
  description: string[];
}

const skills: Skill[] = [
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    description: ['LPIC-1 certified', 'System administration', 'Kali Linux'],
  },
  {
    name: 'IT Security',
    icon: '/Docusaurus/img/security.svg',
    description: ['Penetration testing', 'OWASP Top 10', 'Vulnerability analysis', 'Burp Suite', 'Linux Server hardening'],
  },
  {
    name: 'Networking',
    icon: '/Docusaurus/img/network.svg',
    description: ['Router & firewall configuration', 'VoIP setup and maintenance', 'NAS server management', 'Network troubleshooting', 'WLAN configuration'],
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
    name: 'Monitoring',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    description: ['Zabbix', 'Grafana', 'System monitoring', 'Alerting'],
  },
  {
    name: 'Virtualization',
    icon: '/Docusaurus/img/virtualization.svg',
    description: ['KVM', 'Hyper-V', 'VirtualBox', 'VM management'],
  },
  {
    name: 'Shell Scripting',
    icon: '/Docusaurus/img/terminal.svg',
    description: ['Bash scripting', 'Task automation', 'System administration', 'CLI tooling'],
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: ['Security tooling', 'Flask & Django', 'Build APIs', 'Backend automation'],
  },
  {
    name: 'Yaml',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
    description: ['GitHub Actions workflows', 'Docker Compose', 'Config management', 'CI/CD pipelines'],
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: ['Version control', 'GitHub', 'Branching & merging', 'CI/CD integration'],
  },
  {
    name: 'SQL',
    icon: '/Docusaurus/img/sql.svg',
    description: ['Relational databases', 'SQL queries', 'SQL Injection attacks', 'Database security'],
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: ['Type safety', 'Interfaces', 'Component typing', 'No any types'],
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: ['Functional components', 'Hooks', 'CSS Modules', 'Portfolio development'],
  },
  {
    name: 'Static Site Generator',
    icon: '/Docusaurus/img/docusaurus.png',
    description: ['Docusaurus', 'Markdown-based docs', 'GitHub Pages deployment', 'Custom React components'],
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    description: ['Web development basics', 'Server-side scripting', 'Form handling', 'Database integration'],
  },
  {
    name: 'Windows',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
    description: ['Active Directory', 'Windows Server', 'PowerShell scripting', 'User management'],
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: ['Semantic markup', 'Accessible structure', 'Forms and validation', 'Tables and lists'],
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: ['CSS Modules', 'Flexbox and Grid', 'Responsive layouts'],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
          {skills.map((skill: Skill) => (
            <div key={skill.name} className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src={skill.icon} alt={skill.name} className={styles.icon} />
                  <span className={styles.label}>{skill.name}</span>
                </div>
                <div className={styles.flipCardBack}>
                  <p className={styles.hoverTitle}>How I used this skill</p>
                  <ul className={styles.hoverList}>
                    {skill.description.map((d: string) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
