import logo from "../assets/logobanese.png"
import banner from "../assets/banner.png"
import { Link } from "react-router-dom"
import bannermobile  from "../assets/bannermobile.png"
import logomobile from "../assets/logo.png"

export function Home() {
    return(
        <header>
            <nav className=" h-24 px-12 py-3 flex justify-between max-md:justify-center items-center">
                <img src={logo} alt="Logo Banese" className=" max-md:hidden" />
                <img src={logomobile} alt="" className="hidden max-md:flex max-md:mr-[5rem] size-[3.125rem]"/>

                <div className="flex gap-5 max-md:items-center max-md:justify-center">
                    <Link to= '/login'><button className="w-64 h-16 rounded-[15px] border-green border-2 font-sans text-xl text-green  font-bold p-3  max-md:w-[6.25rem] max-md:h-[3.125rem] max-md:text-[0.625rem] max-md:flex max-md:items-center max-md:justify-center">Entrar </button></Link>
                    <Link to= '/register'><button className="w-64 h-16 rounded-[15px] border-green border-2 font-sans text-xl font-bold p-3 bg-green text-white  max-md:w-[6.25rem] max-md:h-[3.125rem] max-md:text-[0.625rem] max-md:flex max-md:items-center max-md:justify-center">Cadastre-se</button></Link>

                </div>

                

            </nav>
            <img src={banner} alt="" className="w-full  max-md:hidden"/>
            <img src={bannermobile} alt="" className="hidden max-md:flex max-md:h-screen max-md:w-full overflow-hidden" />
        </header>
    )
}