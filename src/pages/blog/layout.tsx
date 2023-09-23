import { Footer, Navbar } from "../../components"

interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </section>
    )
}

export default Layout