import  loginpic  from "../assets/loginpic.png"
import logo from "../assets/logo.png"
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
 
export function Register() {
    return(
        <div className="flex">
            <div >
                <img src={loginpic} alt="" className="max-h-screen w-[65rem] object-cover"/>
                <img src={logo} alt="" className="absolute top-[0.8rem] m-[1.5rem]"/>
            </div>

            <div className="p-5 ">
                <div className="flex size-fit items-center">
                    <Link to="/"><FaAngleLeft  size={30} className="mx"/> </Link>
                    <Link to="/"><p className="font-bold">Voltar</p></Link>
                    
                </div>

                <div className="p-7 mt-20">
                    <h1 className="text-4xl font-bold">Crie uma conta</h1>

                    <form action="">

                    </form>
                </div>

            </div>
        </div>
    )
}