import { BrowserRouter } from "react-router-dom"
import BaseRouter from "./router"
import Layout from "./layout"


const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </Layout>
  )
}

export default App
