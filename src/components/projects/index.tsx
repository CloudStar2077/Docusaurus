import { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './projects.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  docLink: string;
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Baby Tools Shop',
    description: 'A Dockerized Django e-commerce web application for selling baby products. Uses SQLite as database and runs behind a custom Docker setup with volume mapping for persistent storage.',
    tags: ['Python', 'Docker', 'Django'],
    docLink: '/Docusaurus/docs/baby-tools-shop',
    githubLink: 'https://github.com/CloudStar2077/baby-tools-shop',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  {
    title: 'Conduit Container',
    description: 'A legacy full-stack application with a Django backend and Angular frontend, containerized using Docker with multi-stage builds and an Nginx reverse proxy.',
    tags: ['Docker', 'Django', 'Angular', 'Nginx'],
    docLink: '/Docusaurus/docs/conduit-container',
    githubLink: 'https://github.com/CloudStar2077/Conduit-Container',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    title: 'Conduit Deployment',
    description: 'A fully automated CI/CD pipeline using GitHub Actions and GitHub Container Registry. Three sequential jobs handle building, config preparation, and deployment via SSH.',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'SSH'],
    docLink: '/Docusaurus/docs/conduit-deployment',
    githubLink: 'https://github.com/CloudStar2077/Conduit-Deployment',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  },
  {
    title: 'Juice Shop Master',
    description: 'OWASP Juice Shop vulnerability writeups covering SQL injection, password hash exposure, and more coming soon.',
    tags: ['Security', 'OWASP', 'Writeups'],
    docLink: '/Docusaurus/docs/juice-shop-master',
    githubLink: 'https://github.com/CloudStar2077/Juice-Shop-Master',
    image: '/Docusaurus/img/security.svg',
  },
  {
    title: 'Minecraft Gaming Server',
    description: 'A Dockerized Java-based Minecraft gaming server using a custom Dockerfile with an OpenJDK base image and an entrypoint script for automated setup.',
    tags: ['Docker', 'Java', 'Gaming'],
    docLink: '/Docusaurus/docs/minecraft-gaming-server',
    githubLink: 'https://github.com/CloudStar2077/Minecraft-Gaming-Server',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    title: 'Truck Signs API',
    description: 'A Dockerized Django REST API for managing truck sign products, categories and orders with PostgreSQL, Gunicorn and Nginx — deployed without Docker Compose.',
    tags: ['Python', 'Django', 'Docker', 'Nginx'],
    docLink: '/Docusaurus/docs/truck-signs-api',
    githubLink: 'https://github.com/CloudStar2077/truck_signs_api',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    title: 'V-Server Setup',
    description: 'Setup and hardening of a virtual server including Nginx web server deployment, SSH key-based authentication, and Git configuration.',
    tags: ['Linux', 'Nginx', 'SSH', 'Security'],
    docLink: '/Docusaurus/docs/v-server-setup',
    githubLink: 'https://github.com/CloudStar2077/V-Server-Setup',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
  {
    title: 'WordPress',
    description: 'A multi-container Docker Compose setup for a WordPress blog website with a MySQL database, secrets management, and an automated entrypoint script.',
    tags: ['WordPress', 'Docker', 'Shell'],
    docLink: '/Docusaurus/docs/wordpress',
    githubLink: 'https://github.com/CloudStar2077/wordpress',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const active = projects[activeIndex];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My project highlights</h2>
        <div className={styles.layout}>
          <ol className={styles.projectList}>
            {projects.map((p: Project, i: number) => (
              <li
                key={p.title}
                className={i === activeIndex ? styles.activeItem : styles.listItem}
                onClick={() => setActiveIndex(i)}
              >
                {p.title}
              </li>
            ))}
          </ol>
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={active.image} alt={active.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{active.title}</h3>
              <div className={styles.tags}>
                {active.tags.map((t: string) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <p className={styles.cardDesc}>{active.description}</p>
              <div className={styles.buttons}>
                <Link to={active.docLink} className={styles.btnPrimary}>Documentation</Link>
                <a href={active.githubLink} target="_blank" rel="noreferrer" className={styles.btnSecondary}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
