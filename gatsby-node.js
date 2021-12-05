const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const portfolioTemplate = path.resolve('./src/templates/portfolioTemplate.js')
    const res = await graphql(`
     query {
          allContentfulPage {
            edges {
              node {
                slug
      subtitle
      title
      sections {
        subtitle
        title
        content {
          title
          image {
            gatsbyImageData
          }
          cardBody{
              cardBody
          }
        }
      }
              }
            }
          }
        }
    
        
    `)

    res.data.allContentfulPage.edges.forEach((edge) => {
        createPage ({
            component: portfolioTemplate,
            path: `/${edge.node.slug}`,
            context:{
                pageData: edge.node,
            }
        })
        
    })
}