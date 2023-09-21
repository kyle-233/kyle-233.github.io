import { useEffect, useState } from "react"
import { request } from "../../request/index.ts"
import BlogCard from "../../components/BlogCard"

interface LabelInfo {
    node: {
        name: string
    }
}

interface BlogInfo {
    node: {
        title: string
        url: string
        number: number
        labels: {
            edges: LabelInfo[]
        }
        createdAt: string
        comments: {
            totalCount: number
        }

    }
}

interface PageInfoProps {
    endCursor: string
    hasNextPage: boolean
}

interface BlogListsProps {
    repository: {
        issues: {
            edges: BlogInfo[],
            pageInfo: PageInfoProps
        }
    }
}

const Blog = (): JSX.Element => {
    const [blogs, setBlogs] = useState<BlogInfo[]>([])
    const [, setPageInfo] = useState<PageInfoProps | null>(null)
    const getBlogs = async () => {
        const state = `
                query {
                    repository(owner:"kyle-233", name:"kyle-233.github.io") {
                    issues(first:20, orderBy: {field: CREATED_AT, direction: DESC}) {
                        edges {
                        node {
                            title
                            createdAt
                            number
                            url
                            comments(first: null) {
                                totalCount
                            }
                            labels(first:5) {
                            edges {
                                node {
                                name
                                }
                            }
                            }
                        }
                        }
                        pageInfo {
                            endCursor
                            hasNextPage
                        }
                    }
                    }
                }
            `
        const { repository: { issues: { edges, pageInfo } } } = await request<BlogListsProps>(state)
        setBlogs((blogs) => [...blogs, ...edges])
        setPageInfo(pageInfo)
    }
    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <section className="flex justify-center">
            <div
                className="w-full max-w-[1024px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4 px-6"
            >

                {
                    blogs.map(blog => (
                        <BlogCard key={blog.node.number} title={blog.node.title} labels={blog.node.labels.edges} createdAt={blog.node.createdAt} />
                    ))
                }
            </div>
        </section>
    )
}

export default Blog