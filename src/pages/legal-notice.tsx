import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './legal-notice.module.css';

export default function LegalNotice() {
  return (
    <Layout
      title="Legal Notice"
      description="Legal notice for the portfolio of Vladimir Ivić"
    >
      <main
        className={styles.page}
        style={{
          minHeight: '100vh',
          backgroundColor: '#1e2a3a',
          color: '#f8f5ec',
        }}
      >
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>
            ← Back to portfolio
          </Link>

          <header className={styles.header}>
            <p className={styles.eyebrow}>Legal information</p>
            <h1 className={styles.title}>Legal Notice</h1>
          </header>

          <section className={styles.section}>
            <p>
              Vladimir Ivić
              <br />
              Franzosenkoppel 30
              <br />
              22547 Hamburg
              <br />
              Germany
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>

            <p>
              Email:{' '}
              <a href="mailto:vladimir.ivic@gmx.de">
                vladimir.ivic@gmx.de
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>Responsible for editorial content</h2>

            <p>
              Vladimir Ivić
              <br />
              Franzosenkoppel 30
              <br />
              22547 Hamburg
              <br />
              Germany
            </p>
          </section>

          <section className={styles.section}>
            <h2>Liability for content</h2>

            <p>
              The contents of this website were created with great care.
              However, no guarantee is given for the accuracy, completeness,
              or currentness of the information provided.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Liability for links</h2>

            <p>
              This website contains links to external websites. I have no
              influence over the content of those websites and therefore
              cannot accept responsibility for their content. The respective
              provider or operator is responsible for the content of linked
              pages.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Copyright</h2>

            <p>
              The content and works created for this website are subject to
              applicable copyright law. Reproduction, editing, distribution,
              or use beyond the limits of copyright law requires prior written
              permission from the respective author.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}