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
const MD_ROOT_DIR = path.join(__dirname, './contents');


/** @type { import('gatsby').GatsbyNode['onCreateWebpackConfig'] } */
exports.onCreateWebpackConfig = ({
  getConfig,
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => { }



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
  const docTemplate = path.resolve(`src/templates/doc-template/index.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fileAbsolutePath
          html
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.nodes.forEach(({
    fileAbsolutePath,
    html
  }) => {
    const pathPatternList = fileAbsolutePath.split(path.sep).slice(0, -1);
    const itemName = pathPatternList.pop();
    const itemGroupName = pathPatternList.pop();
    createPage({
      path: `${itemGroupName}/${itemName}`,
      component: docTemplate,
      context: { content: html }, // additional data can be passed via context
    })
  });

  // {
  //   "data": {
  //     "allMarkdownRemark": {
  //       "nodes": [
  //         {
  //           "id": "ac9dd505-8630-576f-b5e3-d2801161dfe6",
  //           "fileAbsolutePath": "/home/kage336/workspace/sim-react-redux/docs/contents/sim-redux/index.md"
  //         },
  //         {
  //           "id": "665f6f94-a8d1-5f34-894b-479eabc2064c",
  //           "fileAbsolutePath": "/home/kage336/workspace/sim-react-redux/docs/contents/api-reference/use-actors/index.md"
  //         }
  //       ]
  //     }
  //   }
  // }

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
