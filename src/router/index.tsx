import { useRoutes } from "react-router-dom"
import routes from "./routes"


const BaseRouter = () => {
    const element = useRoutes(routes)

    return element
}

export default BaseRouter