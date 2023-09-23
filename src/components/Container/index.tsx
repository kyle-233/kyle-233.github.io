interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container = ({ children, className
}: ContainerProps): JSX.Element => {
    return (
        <section className={`flex justify-center ${className}`}>
            <div
                className="w-full max-w-[1024px] px-6"
            >
                {children}
            </div>
        </section>
    )
}

export default Container