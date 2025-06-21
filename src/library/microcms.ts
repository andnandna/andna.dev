import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk"
import { createClient } from "microcms-js-sdk"

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

export type Blog = {
  title: string
  content: string
  description: string
} & MicroCMSListContent

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blogs", queries })
}

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  })
}
