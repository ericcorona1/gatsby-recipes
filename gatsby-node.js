const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulGatsbyPracticePage {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulGatsbyPracticePage.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/pages/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
