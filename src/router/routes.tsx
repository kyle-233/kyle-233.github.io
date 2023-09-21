import { ReactNode, Suspense, lazy } from "react"

const Home = lazy(() => import('../pages/home'))
const Blog = lazy(() => import('../pages/blog'))

interface RoutesProps {
    path: string
    element: ReactNode
}

const routes: RoutesProps[] = [
    {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}>
            <Home />
        </Suspense>
    }, {
        path: '/blog',
        element: <Suspense fallback={<div>Loading...</div>}>
            <Blog />
        </Suspense>
    }
]

export default routes