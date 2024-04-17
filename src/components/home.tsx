import logo from "../assets/logobanese.png"
import banner from "../assets/banner.png"
import { Link } from "react-router-dom"

export function Home() {
    return(
        <header>
            <nav className=" h-24 px-12 py-3 flex justify-between">
                <img src={logo} alt="Logo Banese" />

                <div className="flex gap-5">
                    <Link to= '/login'><button className="w-64 h-16 rounded-[15px] border-green border-2 font-sans text-xl text-green  font-bold p-3 ">Entrar </button></Link>
                    <Link to= '/register'><button className="w-64 h-16 rounded-[15px] border-green border-2 font-sans text-xl font-bold p-3 bg-green text-white">Cadastre-se</button></Link>

                </div>

                

            </nav>
            <img src={banner} alt="" className="w-full"/>
        </header>
    )
}