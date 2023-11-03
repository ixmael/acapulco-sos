const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // sets the template for the pages
    const storyblokEntry = path.resolve("src/templates/persona-extraviada.tsx");

    // gets all storyblok stories with the content type 'page'
    resolve(
      graphql(
        `
          query MissingQuery {
            allContentfulPersonaExtraviada {
              edges {
                node {
                  contentful_id
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const entries = result.data.allContentfulPersonaExtraviada.edges;

        // creates a page for each entry with the storyblok slug
        entries.forEach((entry) => {
          const page = {
            path: `/persona-desaparecida/${entry.node.contentful_id}`,
            component: storyblokEntry,
            context: {
              id: entry.node.contentful_id,
            },
          };
          createPage(page);
        });
      })
    );
  });
};
