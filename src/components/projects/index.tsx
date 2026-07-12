import { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './projects.module.css';

interface Tag {
  label: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  tags: Tag[];
  docPath: string;
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Baby Tools Shop',
    description: 'A Dockerized Django e-commerce web application for selling baby products. Uses SQLite as database and runs behind a custom Docker setup with volume mapping for persistent storage.',
    tags: [
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    ],
    docPath: 'docs/baby-tools-shop',
    githubLink: 'https://github.com/CloudStar2077/baby-tools-shop',
    image: '/Docusaurus/img/baby-tools.jpg',
  },
  {
    title: 'Conduit Container',
    description: 'A legacy full-stack application with a Django backend and Angular frontend, containerized using Docker with multi-stage builds and an Nginx reverse proxy.',
    tags: [
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { label: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { label: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    ],
    docPath: 'docs/conduit-container',
    githubLink: 'https://github.com/CloudStar2077/Conduit-Container',
    image: '/Docusaurus/img/conduit-container.jpg',
  },
  {
    title: 'Conduit Deployment',
    description: 'A fully automated CI/CD pipeline using GitHub Actions and GitHub Container Registry. Three sequential jobs handle building, config preparation, and deployment via SSH.',
    tags: [
      { label: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { label: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
    docPath: 'docs/conduit-deployment',
    githubLink: 'https://github.com/CloudStar2077/Conduit-Deployment',
    image: '/Docusaurus/img/conduit-deployment.jpg',
  },
  {
    title: 'Docusaurus',
    description: 'A personal portfolio website built with Docusaurus, React and TypeScript. Hosted on GitHub Pages with a fully automated CI/CD pipeline using GitHub Actions and environment variables managed via GitHub Secrets.',
    tags: [
      { label: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { label: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { label: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    ],
    docPath: 'docs/docusaurus',
    githubLink: 'https://github.com/CloudStar2077/Docusaurus',
    image: '/Docusaurus/img/docusaurus.png',
  },
  {
    title: 'Juice Shop Master',
    description: 'OWASP Juice Shop vulnerability writeups covering SQL injection, password hash exposure, and more coming soon.',
    tags: [
      { label: 'Security', icon: '/Docusaurus/img/security.svg' },
      { label: 'OWASP', icon: '/Docusaurus/img/security.svg' },
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    docPath: 'docs/juice-shop-master',
    githubLink: 'https://github.com/CloudStar2077/Juice-Shop-Master',
    image: '/Docusaurus/img/juice-shop.png',
  },
  {
    title: 'Minecraft Gaming Server',
    description: 'A Dockerized Java-based Minecraft gaming server using a custom Dockerfile with an OpenJDK base image and an entrypoint script for automated setup.',
    tags: [
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { label: 'Shell', icon: '/Docusaurus/img/terminal.svg' },
    ],
    docPath: 'docs/minecraft-gaming-server',
    githubLink: 'https://github.com/CloudStar2077/Minecraft-Gaming-Server',
    image: '/Docusaurus/img/minecraft.jpg',
  },
  {
    title: 'Truck Signs API',
    description: 'A Dockerized Django REST API for managing truck sign products, categories and orders with PostgreSQL, Gunicorn and Nginx — deployed without Docker Compose.',
    tags: [
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
    docPath: 'docs/truck-signs-api',
    githubLink: 'https://github.com/CloudStar2077/truck_signs_api',
    image: '/Docusaurus/img/truck-signs.png',
  },
  {
    title: 'V-Server Setup',
    description: 'Setup and hardening of a virtual server including Nginx web server deployment, SSH key-based authentication, and Git configuration.',
    tags: [
      { label: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { label: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
    docPath: 'docs/v-server-setup',
    githubLink: 'https://github.com/CloudStar2077/V-Server-Setup',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
  {
    title: 'WordPress',
    description: 'A multi-container Docker Compose setup for a WordPress blog website with a MySQL database, secrets management, and an automated entrypoint script.',
    tags: [
      { label: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { label: 'Shell', icon: '/Docusaurus/img/terminal.svg' },
    ],
    docPath: 'docs/wordpress',
    githubLink: 'https://github.com/CloudStar2077/wordpress',
    image: '/Docusaurus/img/wordpress.jpg',
  },
];

const VISIBLE_COUNT = 5;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  const active = projects[activeIndex];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.heading}>My project highlights</h2>
        <div className={styles.layout}>
          <div className={styles.projectListWrapper}>
            <ol className={styles.projectList}>
              {projects.slice(0, VISIBLE_COUNT).map((p: Project, i: number) => (
                <li
                  key={p.title}
                  className={i === activeIndex ? styles.activeItem : styles.listItem}
                  onClick={() => setActiveIndex(i)}
                >
                  {p.title}
                </li>
              ))}
            </ol>
            <Link to={`${baseUrl}docs/intro`} className={styles.seeMore}>
              ↳ see more projects
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={active.image} alt={active.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{active.title}</h3>
              <div className={styles.tags}>
                {active.tags.map((t: Tag) => (
                  <span key={t.label} className={styles.tag}>
                    <img src={t.icon} alt={t.label} className={styles.tagIcon} />
                    {t.label}
                  </span>
                ))}
              </div>
              <p className={styles.cardDesc}>{active.description}</p>
              <div className={styles.buttons}>
                <Link to={`${baseUrl}${active.docPath}`} className={styles.btnPrimary}>Documentation</Link>
                <a href={active.githubLink} target="_blank" rel="noreferrer" className={styles.btnSecondary}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
