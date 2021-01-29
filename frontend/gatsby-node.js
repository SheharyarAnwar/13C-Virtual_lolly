const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      swapi {
        lollies {
          recipientName
          message
          senderName
          fillTop
          fillMiddle
          fillBottom
          lollyPath
        }
      }
    }
  `)
  console.log(result)
  result.data.swapi.lollies.forEach(val => {
    createPage({
      path: val.lollyPath,
      component: path.resolve(`./src/Templates/LollyTemplate/index.tsx`),
      context: {
        ...val,
      },
    })
  })
}
