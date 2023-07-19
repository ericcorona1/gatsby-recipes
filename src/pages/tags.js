import React from "react";
import Layout from "../components/Layout.js";
import { graphql, Link } from "gatsby";
import setupTags from "../components/utils/setupTags.js";
import slugify from "slugify";
import SEO from "../components/SEO.js";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulGatsbyPracticePage.nodes);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulGatsbyPracticePage {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
export const Head = () => (
  <SEO title="Tags" />
);
