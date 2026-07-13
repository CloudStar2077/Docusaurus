import Layout from '@theme/Layout';

export default function LegalNotice() {
  return (
    <Layout title="Legal Notice">
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 24px',
          color: '#fff',
        }}
      >
        <h1>Legal Notice</h1>

        <p>
          Vladimir Ivić<br />
          Franzosenkoppel 30<br />
          22547 Hamburg<br />
          Germany
        </p>

        <h2>Contact</h2>

        <p>
          E-Mail: vladimir.ivic@gmx.de
        </p>

        <h2>Responsible for the content</h2>

        <p>
          Vladimir Ivić
        </p>

        <h2>Disclaimer</h2>

        <p>
          The contents of this website have been created with the greatest
          possible care. However, no guarantee can be given for the accuracy,
          completeness or timeliness of the information provided.
        </p>
      </main>
    </Layout>
  );
}