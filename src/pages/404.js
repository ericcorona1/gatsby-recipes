import React from "react";
import Layout from "../components/Layout.js";
import SEO from "../components/SEO.js";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
};

export default Error;

export const Head = () => (
  <SEO title="Error" />
);