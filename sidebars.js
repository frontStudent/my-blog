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
  frontendSidebar: [{ type: "autogenerated", dirName: "frontend" }],
  backendSidebar: [{ type: "autogenerated", dirName: "backend" }],
  dataSidebar: [{ type: "autogenerated", dirName: "big-data" }],
  aiSidebar: [{ type: "autogenerated", dirName: "AI" }],
  // basicSidebar: [{ type: "autogenerated", dirName: "cs-basic" }],
  devopsSidebar: [{ type: "autogenerated", dirName: "DevOps" }],
  // projectSidebar: [{ type: "autogenerated", dirName: "project" }],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
