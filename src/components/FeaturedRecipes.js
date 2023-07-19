import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RecipesList from "../components/RecipesList.js";

const FeaturedRecipes = () => {
  const {
    allContentfulGatsbyPracticePage: { nodes: recipes },
  } = useStaticQuery(query);
  return (
    <section className="featured-recipes">
      <h5>Look at this Awesomesauce!</h5>
      <RecipesList recipes={recipes} />
    </section>
  );
};

const query = graphql`
  query {
    allContentfulGatsbyPracticePage(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default FeaturedRecipes;
