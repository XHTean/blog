import data from "./data/site.json";

export const SITE = {
  title: data.title,
  subtitle: data.subtitle,
  description: data.description,
  author: data.author,
  url: "https://xhtean.github.io",
  lang: "zh-CN",
  repo: "https://github.com/XHTean/blog",
};

export const PROFILE = {
  avatar: data.avatar,
  banner: data.banner,
  bio: data.bio,
};

export const ANNOUNCEMENT = data.announcement;
export const ABOUT = data.about;
export const SOCIALS = data.socials;
export const NAV = data.nav;
export const REPOS = data.repos;
export const FRIENDS = data.friends;
export const GALLERY = data.gallery;
export const PROJECTS = data.projects;
export const TRACKS = data.tracks;
export const COLLECTION = data.collection;

export const GISCUS = {
  enabled: false,
  repo: "XHTean/blog",
  repoId: "R_kgDOVqGPcA",
  category: "Announcements",
  categoryId: "DIC_kwDOVqGPcM4DK2z8",
  mapping: "pathname",
  lang: "zh-CN",
};
