/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/about-our-api',
        },
        {
          type: 'doc',
          id: 'getting-started/api-status-codes',
        },
        {
          type: 'doc',
          id: 'getting-started/rest-api-authentication',
        },
      ],
    },
  ],
  apiSpecSidebar: [
    {
      type: 'category',
      label: 'Checkouts V3',
      link: {
        type: 'generated-index',
        title: 'Checkouts V3',
        description:
          'This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.',
        slug: '/category/checkouts',
      },
      items: require('./docs/checkouts/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Customers V3',
      link: {
        type: 'generated-index',
        title: 'Customers V3',
        description:
          'This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.',
        slug: '/category/customers',
      },
      items: require('./docs/customers/sidebar.js'),
    },
  ],
  openApiSidebar: [
    {
      type: 'category',
      label: 'Petstore',
      link: {
        type: 'generated-index',
        title: 'Petstore API',
        description:
          'This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.',
        slug: '/category/petstore-api',
      },
      items: require('./docs/petstore/sidebar.js'),
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
