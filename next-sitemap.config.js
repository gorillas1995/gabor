/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://reparatiiacoperisurisimontaj.ro/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/montaj-acoperisuri"),
    await config.transform(config, "/reparatii-acoperisuri"),
    await config.transform(config, "/dulgherie-acoperis"),
    await config.transform(config, "/servicii/reparatii-acoperisuri-existente"),
    await config.transform(config, "/servicii/refacere-dulgherie"),
    await config.transform(config, "/servicii/reparatii-urgenta"),
    await config.transform(config, "/servicii/montaj-tigla-ceramica"),
    await config.transform(config, "/servicii/montaj-sageac-metalic"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin", "/api"],
      },
    ],
    additionalSitemaps: ["https://reparatiiacoperisurisimontaj.ro/sitemap.xml"],
  },
};
