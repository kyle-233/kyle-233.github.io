import { Spinner } from "@nextui-org/react"

const Loading = (): JSX.Element => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <Spinner color="primary" />
        </section>
    )
}

export default Loading