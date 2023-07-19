import React from "react";
import { graphql } from "gatsby";
import RecipesList from "../../components/RecipesList";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulGatsbyPracticePage.nodes;
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes}></RecipesList>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulGatsbyPracticePage(
      sort: { id: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default TagTemplate;

export const Head = ({pageContext}) => (
  <SEO title={pageContext.tag} />
);
