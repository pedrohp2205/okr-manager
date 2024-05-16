import  loginpic  from "../assets/loginpic.png"
import logo from "../assets/logo.png"
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export function Login() {
    return(
        <div className="flex">
        <div >
            <img src={loginpic} alt="" className="max-h-screen w-[65rem] object-cover max-md:hidden"/>
            <img src={logo} alt="" className="absolute top-[0.8rem] m-[1.5rem] max-md:hidden"/>
        </div>

        <div className="p-5 mx-auto flex-1 max-sm:px-0">
            <div className="flex size-fit items-center max-md:absolute max-md:left-[1.3rem]">
                <Link to="/"><FaAngleLeft  size={30} className=""/> </Link>
                <Link to="/"><p className="font-bold">Voltar</p></Link>
                
            </div>

            <div className="p-7 mt-20 m-auto ">
                <h1 className="text-4xl font-bold mb-12">Acesse sua conta</h1>

                <form action="" className=" ">


                    <div >

                         <div className="mt-8">
                            <label htmlFor="" className="text-xl">Email</label>
                            <input type="email"  className="rounded-[10px] shadow-md shadow-[#00000040] h-16 w-full flex-col mt-1 pl-5"/>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="" className="text-xl">Senha</label>
                            <input type="password"  className="rounded-[10px] shadow-md shadow-[#00000040] h-16 w-full flex-col mt-1 pl-5"/>
                        </div>

                        <div className="mt-12 flex items-center">
                            <Checkbox.Root className="bg-white size-[25px] border-2 border-green flex items-center justify-center rounded-md p-0" id="c1">
                                <Checkbox.Indicator className="text-white bg-green">
                                    <CheckIcon />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            <label htmlFor="c1" className="ml-2 text-xl">Mantenha me conectado</label>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <Link to="/dashboard"><button className="mt-[180px] bg-green rounded-full text-white border-2 w-full px-32 py-8 text-xl">Continuar</button></Link>

                        <button className="mt-5 text-green text-xl">Esqueci Minha senha</button>
                    </div>
                   
                    
                </form>
            </div>

        </div>
    </div>
    )
}