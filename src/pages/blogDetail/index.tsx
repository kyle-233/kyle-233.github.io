import { Container } from "@/components/index.ts"
import { request } from "@/request/index.ts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css'

interface LabelInfo {
    node: {
        name: string
        color: string
    }
}

interface BlogInfo {

    title: string
    url: string
    number: number
    bodyHTML: string
    labels: LabelInfo[]
    createdAt: string
}

interface BlogDetailProps {
    repository: {
        issue: BlogInfo
    }
}

const BlogDetail = (): JSX.Element => {
    const { blogId } = useParams();
    const [bodyHtml, setBodyHtml] = useState({
        title: '',
        __html: '',
        labels: [{ node: { name: '', color: '' } }],
        createdAt: '',
    })
    const getDetail = async () => {
        const state = `query {
            repository(owner: "kyle-233", name: "kyle-233.github.io") {
              issue(number: ${blogId}) {
                title
                bodyHTML
                number
                url
                createdAt
                labels (first: 10) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }`
        const res = await request<BlogDetailProps>(state)
        const { title, bodyHTML, labels, createdAt } = res.repository.issue;
        setBodyHtml(() => ({
            __html: bodyHTML,
            title: title,
            labels: labels,
            createdAt: createdAt,
        }))
    }
    useEffect(() => {
        getDetail()
    }, [])

    return (
        <Container>
            <h1>{ }</h1>
            <div className="markdown-body">
                <p dangerouslySetInnerHTML={bodyHtml}></p>
            </div>
        </Container>
    )
}

export default BlogDetail