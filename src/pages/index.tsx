import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Portfolio"
      description="DevSecOps Engineer Portfolio">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
