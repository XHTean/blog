# SorenX 的博客

一个带管理后台的静态博客：

- **站点**：Astro，托管在 GitHub Pages
- **后台**：站内 `/admin`（用 GitHub fine-grained token 登录，直接改仓库里的 Markdown，不需要装 GitHub App）
- **评论**：Giscus（基于 GitHub Discussions，装好 App 后把 `src/site.ts` 的 `GISCUS.enabled` 改为 `true`）
- **功能**：搜索、标签、归档、文章目录、阅读进度、上下篇、随机一篇、音乐播放器、RSS

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

## 管理后台

打开 https://xhtean.github.io/blog/admin/ （或本地 `/admin/`）。

1. 建一个 fine-grained token：https://github.com/settings/personal-access-tokens/new
2. Repository access 只选 `XHTean/blog`
3. Permissions → Contents：**Read and write**
4. 把 token 粘进后台，连接后就能新建/编辑/删除文章

token 默认只存在当前标签页，勾「记住 7 天」才写本机 localStorage；点「退出」会清掉。后台页面不会被搜索引擎收录。

文章存在 `src/content/posts/`，图片默认上传到 `public/uploads/`。

## 打开评论（Giscus）

1. 仓库保持 **public**
2. 仓库 `Settings → General → Features`，勾选 **Discussions**
3. 安装 giscus App：https://github.com/apps/giscus ，授权到 `XHTean/blog`
4. 打开 https://giscus.app ，填入仓库，分类已设为 `Announcements`
5. `src/site.ts` 里已填好 repo ID 和分类 ID，把 `GISCUS.enabled` 改成 `true`
6. 提交后重新部署

## 音乐

播放器曲目在 `src/data/tracks.ts`，音频放 `public/music/`。现在两首是自制的 30 秒演示音轨，直接换成你的 MP3/WAV 即可。

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
