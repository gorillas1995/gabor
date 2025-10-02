import type { MetadataRoute } from "next";

const siteUrl =
  process.env.SITE_URL || "https://reparatiiacoperisurisimontaj.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths: string[] = [
    "/",
    "/montaj-acoperisuri",
    "/reparatii-acoperisuri",
    "/dulgherie-acoperis",
    "/servicii/montaj-pazie-din-tabla",
    "/servicii/montaj-pazie-lemn",
    "/servicii/montaj-sageac-lemn",
    "/servicii/montaj-sageac-metalic",
    "/servicii/montaj-sistem-pluvial",
    "/servicii/montaj-tabla-faltuita",
    "/servicii/montaj-tigla-ceramica",
    "/servicii/montaj-tigla-metalica",
    "/servicii/refacere-dulgherie",
    "/servicii/reparatii-acoperisuri-existente",
    "/servicii/reparatii-urgenta",
    "/servicii/vopsit-acoperis",
    "/multumim",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
