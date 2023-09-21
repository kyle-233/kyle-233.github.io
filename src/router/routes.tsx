import { ReactNode, lazy } from "react"

// const Home = lazy(() => import('../pages/home/index.tsx'))
const Blog = lazy(() => import('../pages/blog/index.tsx'))
const Contact = lazy(() => import('../pages/contact/index.tsx'))

interface RoutesProps {
    path: string
    element: ReactNode
}

const routes: RoutesProps[] = [
    {
        path: '/',
        element: <Blog />
    }, {
        path: 'blog',
        element: <Blog />
    }, {
        path: 'contact',
        element: <Contact />
    }
]

export default routes