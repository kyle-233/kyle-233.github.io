import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import BaseRouter from "./router"
import Layout from "./layout"


const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <BaseRouter />
        </BrowserRouter>
      </Suspense>
    </Layout>
  )
}

export default App
