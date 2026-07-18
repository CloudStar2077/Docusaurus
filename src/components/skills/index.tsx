import {useState} from 'react';
import styles from './skills.module.css';

interface Skill {
  name: string;
  icon: string;
  description: string[];
}

const skills: Skill[] = [
  {
    name: 'Linux',
    icon: 'img/lpic-1-skill-icon.png',
    description: ['LPIC-1 certified', 'System administration', 'Kali Linux', 'Ubuntu', 'Debian'],
  },
  {
    name: 'IT Security',
    icon: '/Docusaurus/img/security.svg',
    description: [
      'Penetration testing',
      'OWASP Top 10',
      'Vulnerability analysis',
      'Burp Suite',
      'Linux Server hardening',
    ],
  },
  {
    name: 'Networking',
    icon: '/Docusaurus/img/network.svg',
    description: [
      'Router & firewall configuration',
      'VoIP setup and maintenance',
      'NAS server management',
      'Network troubleshooting',
      'WLAN configuration',
    ],
  },
  {
    name: 'Container',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: [
      'Docker images',
      'Multi-container apps',
      'Networking',
      'Volume management',
    ],
  },
  {
    name: 'CI/CD with GitHub Actions',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
    description: [
      'Automated builds and tests',
      'Pre-built actions',
      'Push and pull request triggers',
      'Automated deployments',
    ],
  },
  {
  name: 'Monitoring and Observability',
  icon: '/Docusaurus/img/monitoring.svg',
  description: [
    'Zabbix',
    'Grafana',
    'System monitoring',
    'Alerting',
  ],
},
  {
    name: 'Virtualization',
    icon: '/Docusaurus/img/virtualization.svg',
    description: ['KVM', 'Hyper-V', 'VirtualBox', 'VM management'],
  },
  {
    name: 'Shell Scripting',
    icon: '/Docusaurus/img/terminal.svg',
    description: [
      'Bash scripting',
      'Task automation',
      'System administration',
      'CLI tooling',
    ],
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: [
      'Version control',
      'GitHub',
      'Branching & merging',
      'CI/CD integration',
    ],
  },
  {
    name: 'Yaml',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
    description: [
      'GitHub Actions workflows',
      'Docker Compose',
      'Config management',
      'CI/CD pipelines',
    ],
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: [
      'Security tooling',
      'Flask & Django',
      'Build APIs',
      'Backend automation',
    ],
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: [
      'Relational databases',
      'SQL queries',
      'SQL Injection attacks',
      'Database security',
    ],
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: [
      'Type safety',
      'Interfaces',
      'Component typing',
      'No any types',
    ],
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: [
      'Functional components',
      'Hooks',
      'CSS Modules',
      'Portfolio development',
    ],
  },
  {
    name: 'Static Site Generator',
    icon: '/Docusaurus/img/docusaurus.png',
    description: [
      'Docusaurus',
      'Markdown-based docs',
      'GitHub Pages deployment',
      'Custom React components',
    ],
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    description: [
      'Web development basics',
      'Server-side scripting',
      'Form handling',
      'Database integration',
    ],
  },
  {
    name: 'Windows',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
    description: [
      'Active Directory',
      'Windows Server',
      'PowerShell scripting',
      'User management',
    ],
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: [
      'Semantic markup',
      'Accessible structure',
      'Forms and validation',
      'Tables and lists',
    ],
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: [
      'CSS Modules',
      'Flexbox and Grid',
      'Responsive layouts',
    ],
  },
];

const SKILLS_PER_PAGE = 3;

const skillPages: Skill[][] = Array.from(
  {length: Math.ceil(skills.length / SKILLS_PER_PAGE)},
  (_, index) =>
    skills.slice(
      index * SKILLS_PER_PAGE,
      index * SKILLS_PER_PAGE + SKILLS_PER_PAGE,
    ),
);

export default function Skills() {
  const [activePage, setActivePage] = useState(0);

  const showPreviousPage = () => {
    setActivePage((current) =>
      current === 0 ? skillPages.length - 1 : current - 1,
    );
  };

  const showNextPage = () => {
    setActivePage((current) =>
      current === skillPages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>

        {/* Desktop */}
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.icon}
                  />
                  <span className={styles.label}>{skill.name}</span>
                </div>

                <div className={styles.flipCardBack}>
                  <p className={styles.hoverTitle}>
                    How I used this skill
                  </p>

                  <ul className={styles.hoverList}>
                    {skill.description.map((description) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className={styles.mobileSlider}>
          <div className={styles.mobileCard}>
            {skillPages[activePage].map((skill) => (
              <article key={skill.name} className={styles.mobileSkill}>
                <div className={styles.mobileSkillHeader}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.mobileIcon}
                  />

                  <span className={styles.mobileLabel}>
                    {skill.name}
                  </span>
                </div>

                <ul className={styles.mobileDescription}>
                  {skill.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.sliderArrow}
              onClick={showPreviousPage}
              aria-label="Show previous skills"
            >
              ‹
            </button>

            <div className={styles.dots}>
              {skillPages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dot} ${
                    index === activePage ? styles.activeDot : ''
                  }`}
                  onClick={() => setActivePage(index)}
                  aria-label={`Show skills page ${index + 1}`}
                  aria-current={index === activePage ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.sliderArrow}
              onClick={showNextPage}
              aria-label="Show next skills"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}