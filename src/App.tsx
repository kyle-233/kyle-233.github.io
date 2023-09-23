import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import BaseRouter from "./router"
import Layout from "./layout"
import { Loading } from "./components"


const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <BaseRouter />
        </BrowserRouter>
      </Suspense>
    </Layout>
  )
}

export default App
