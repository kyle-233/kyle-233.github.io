import { ReactNode, lazy } from "react"

const Home = lazy(() => import('../pages/home/index'))
const Blog = lazy(() => import('../pages/blog/index'))
const Contact = lazy(() => import('../pages/contact/index'))

interface RoutesProps {
    path: string
    element: ReactNode
}

const routes: RoutesProps[] = [
    {
        path: '/',
        element: <Home />
    }, {
        path: 'blog',
        element: <Blog />
    }, {
        path: 'contact',
        element: <Contact />
    }
]

export default routes