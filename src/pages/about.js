import React from "react";
import Layout from "../components/Layout.js";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import FeaturedRecipes from "../components/FeaturedRecipes.js";
import SEO from "../components/SEO.js";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean horts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <FeaturedRecipes />
      </main>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <SEO title="About" description="this is the about page" />
);
