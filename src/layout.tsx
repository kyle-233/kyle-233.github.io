
interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <section className="min-h-screen flex flex-col">
            <main className="flex-1">
                {children}
            </main>
        </section>
    )
}

export default Layout