// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://rokan.tech",
//   generateRobotsTxt: true, // (optional)
//   // ...other options
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rokan.tech",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    // Exclude the "noindex" directive
    additionalSitemaps: [
      "https://rokan.tech/sitemap.xml", // Replace with the actual path to your sitemap
    ],
  },
  // ...other options
};
