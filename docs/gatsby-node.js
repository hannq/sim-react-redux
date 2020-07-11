/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// @ts-check

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
const fse = require('fs-extra');

/** @type { import('gatsby').GatsbyNode['onCreateWebpackConfig'] } */
exports.onCreateWebpackConfig = ({
  getConfig,
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  // console.log('getConfig ==>', getConfig())

  // actions.setWebpackConfig({
  //   module: {
  //     rules: [
  //       {
  //         test: /\.less$/,
  //         use: [
  //           // You don't need to add the matching ExtractText plugin
  //           // because gatsby already includes it and makes sure it's only
  //           // run at the appropriate stages, e.g. not in development
  //           loaders.miniCssExtract(),
  //           loaders.css({ importLoaders: 1 }),
  //           // the postcss loader comes with some nice defaults
  //           // including autoprefixer for our configured browsers
  //           loaders.postcss(),
  //           `less-loader`,
  //         ],
  //       },
  //     ],
  //   },
  //   plugins: [
  //     plugins.define({
  //       __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
  //     }),
  //   ],
  // })
}



/** @type { import('gatsby').GatsbyNode['onCreatePage'] } */
exports.onCreatePage = ({ page, node, getNode, actions, pathPrefix }) => {
  switch (page.path) {
    case '/index/':
      // @ts-ignore
      actions.deletePage(page);
      // @ts-ignore
      actions.createPage({
        ...page,
        path: '/',
        context: {}, // additional data can be passed via context
      })
      break;
    default:
      break;
  }
  //   const { createNodeField } = actions
  //   if (node.internal.type === `MarkdownRemark`) {
  //     const slug = createFilePath({ node, getNode, basePath: `pages` })
  //     createNodeField({
  //       node,
  //       name: `slug`,
  //       value: slug,
  //     })
  //   }
}

/** @type { import('gatsby').GatsbyNode['createPages'] } */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-template.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___publishDate }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  /** page 文件夹下的文件列表 */
  // const dirList = await fse.readdir(path.join(__dirname, './src/pages'));
  // dirList.forEach(dir => {
  //   actions.createPage({
  //     path: dir,
  //     component: path.resolve(path.join(__dirname, './src/pages', dir, 'index.tsx')),
  //     context: { id: dir }
  //   })
  // })

  // console.log('dirList ==>', dirList)

  // actions.createPage({
  //   path: `/home/`,
  //   component: path.resolve(`./src/pages/index/index.tsx`),
  //   // The context is passed as props to the component as well
  //   // as into the component's GraphQL query.
  //   context: {
  //     id: `123456`,
  //   },
  // });
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  // const result = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const result = await graphql(`
  //   query {
  //     allFile {
  //       edges {

  //       }
  //     }
  //   }
  // `)
  // console.log(JSON.stringify(result, null, 4))
}
