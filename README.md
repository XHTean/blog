# SorenX 的博客

一个带管理后台的静态博客：

- **站点**：Astro，托管在 GitHub Pages
- **后台**：Pages CMS（浏览器登录，直接改仓库里的 Markdown）
- **评论**：Giscus（基于 GitHub Discussions）

## 本地开发

```bash
pnpm install
pnpm dev
```

构建：

```bash
pnpm build
pnpm preview
```

## 写文章

1. 打开 https://app.pagescms.org ，用 GitHub 登录
2. 安装 Pages CMS 的 GitHub App，选择 `XHTean/blog` 仓库
3. 在「文章」里新建，填标题、日期、标签，写正文
4. 保存后会自动提交到仓库，GitHub Actions 重新构建发布

文章存在 `src/content/posts/`，图片默认上传到 `public/uploads/`。

## 打开评论（Giscus）

1. 仓库保持 **public**
2. 仓库 `Settings → General → Features`，勾选 **Discussions**
3. 安装 giscus App：https://github.com/apps/giscus ，授权到 `XHTean/blog`
4. 打开 https://giscus.app ，填入仓库，分类选 `Comments`（或 `Announcements`）
5. 把页面上的 `data-repo-id` 和 `data-category-id` 填到 `src/site.ts` 的 `GISCUS`
6. 提交后重新部署

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布。

第一次需要在仓库 `Settings → Pages` 里把 Source 设为 **GitHub Actions**。

## 改站点信息

- 标题、描述、作者：`src/site.ts`
- 导航、页脚：`src/components/Header.astro` / `Footer.astro`
- 样式：`src/styles/global.css`

## 目录

```
src/content/posts/     文章（Markdown）
src/pages/             页面路由
src/layouts/           布局
src/components/        组件
public/uploads/        后台上传的图片
.pages.yml             Pages CMS 配置
```
