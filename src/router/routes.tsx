import { ReactNode, lazy } from "react"

const Home = lazy(() => import('../pages/home/index.tsx'))
const Blog = lazy(() => import('../pages/blog/index.tsx'))
const Contact = lazy(() => import('../pages/contact/index.tsx'))
const BlogDetail = lazy(() => import('../pages/blogDetail/index.tsx'))

interface RoutesProps {
    path: string
    element: ReactNode
    children?: {
        path: string
        element: ReactNode
    }[]
}

const routes: RoutesProps[] = [
    {
        path: '/',
        element: <Home />
    }, {
        path: '/blog',
        element: <Blog />,
    }, {
        path: '/blog/:blogId',
        element: <BlogDetail />,
    }, {
        path: '/contact',
        element: <Contact />
    }
]

export default routes