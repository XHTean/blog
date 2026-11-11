---
title: 你好，世界
description: 这是博客的第一篇文章，也是一份简单的使用说明。
date: 2026-11-11
tags: ["随笔", "博客"]
draft: false
---

欢迎来到我的博客。

这里会记录一些写代码、折腾工具和生活中的事。站点由 Astro 构建，托管在 GitHub Pages 上，文章都存在仓库的 `src/content/posts/` 目录里。

## 怎么写新文章

1. 打开后台（Pages CMS），用 GitHub 登录；
2. 在「文章」里新建一篇；
3. 填标题、日期、标签，然后写正文；
4. 保存后，GitHub Actions 会自动构建并发布。

## 代码块

```js
const greet = (name) => `你好，${name}`;
console.log(greet("世界"));
```

> 慢一点，写清楚，比写得多更重要。

就这些，开始写吧。
