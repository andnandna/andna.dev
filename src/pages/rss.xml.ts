import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getBlogs } from "../library/microcms"

export async function GET(context: APIContext) {
  const blogs = await getBlogs()
  return rss({
    title: "andna.dev Blog",
    description: `andna's Blog`,
    site: context.site || "https://andna.dev",
    items: blogs.contents.map((blog) => ({
      title: blog.title,
      pubDate: blog.publishedAt ? new Date(blog.publishedAt) : undefined,
      description: blog.description,
      link: `/blog/${blog.id}`,
    })),
  })
}
