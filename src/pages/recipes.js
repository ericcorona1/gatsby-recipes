import React from "react";
import Layout from "../components/Layout.js";
import AllRecipes from "../components/AllRecipes.js";
import SEO from "../components/SEO.js";

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
export const Head = () => (
  <SEO title="Recipes" />
);