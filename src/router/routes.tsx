import { ReactNode } from "react"
import getPage from "./page"

interface RoutesProps {
    path: string
    element: ReactNode
}

const routes: RoutesProps[] = [
    {
        path: '/',
        element: getPage('home')
    }, {
        path: '/blog',
        element: getPage('blog')
    }
]

export default routes