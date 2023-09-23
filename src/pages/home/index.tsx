import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { Container } from "@/components/index.ts"
import HomeBg from './assets/homeBg.jpg'
import { useNavigate } from "react-router-dom"

const Home = (): JSX.Element => {
    const [time, setTime] = useState(new Date())
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(() => new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <section className="relative max-h-screen min-h-screen bg-red overflow-auto">
            <img src={HomeBg} alt="home background" className="absolute top-0 left-0 w-full h-full object-cover z-1" />
            <Container className="z-2 relative bg-transparent">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="flex justify-center items-center flex-col text-white antialiased">
                        <h2 className="text-9xl font-bold">{time.getHours()}{':'}{time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}</h2>
                        <h3 className="mt-4 text-4xl">
                            {'Good'} {time.getHours() >= 16 ? 'Evening' : time.getHours() >= 8 ? 'Afternoon' : 'Morning'}{'!'}</h3>
                        <h4 className="mt-4 text-[18px]">What is your mian focus for today?</h4>
                        <div className="mt-6 h-[2px] w-full bg-white"></div>
                        <Button radius="full" className="mt-8 text-[20px] font-bold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={() => { navigate('/blog') }}>
                            EXPLORE
                        </Button>
                    </div>
                </div>
                <div className="bg-white">

                </div>
            </Container>
        </section>
    )
}

export default Home