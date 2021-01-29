/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /Assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Josefin Sans`,
              variants: [`400`, `700`],
            },
            {
              family: `Lora`,
              variants: [`400`, `500`],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url:
          "https://cg2kx6rvqvdwva7lxiquzq3tsu.appsync-api.ap-south-1.amazonaws.com/graphql",
        headers: {
          "x-api-key": "da2-b3rlrxrtgvavrg3ggogb564paa",
        },
      },
    },
  ],
}
