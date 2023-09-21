import { Suspense, lazy } from "react"


const getPage = (name: string): JSX.Element => {

    const Content = lazy(() => import(/* @vite-ignore */`../pages/${name}`))
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content />
        </Suspense>
    )
}

export default getPage