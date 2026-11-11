import { getCollection } from "astro:content";
import { url } from "../utils/url";
import { formatDate } from "../utils/date";

export async function GET() {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const items = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    date: formatDate(post.data.date),
    url: url(`/posts/${post.id}/`),
  }));
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
