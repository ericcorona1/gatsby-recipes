import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <>
      <html lang="en" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
    </>
  );
};

export default SEO;
