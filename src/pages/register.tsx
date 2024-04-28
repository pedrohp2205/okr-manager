import  loginpic  from "../assets/loginpic.png"
import logo from "../assets/logo.png"
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
 
export function Register() {
    return(
        <div className="flex">
            <div >
                <img src={loginpic} alt="" className="max-h-screen w-[65rem] object-cover"/>
                <img src={logo} alt="" className="absolute top-[0.8rem] m-[1.5rem]"/>
            </div>

            <div className="p-5 mx-auto flex-1">
                <div className="flex size-fit items-center">
                    <Link to="/"><FaAngleLeft  size={30} className="mx"/> </Link>
                    <Link to="/"><p className="font-bold">Voltar</p></Link>
                    
                </div>

                <div className="p-7 mt-20 m-auto ">
                    <h1 className="text-4xl font-bold mb-12">Crie uma conta</h1>

                    <form action="">
                        <div className="">
                            <label htmlFor="" className="text-xl">Nome</label>
                            <input type="text"  className="rounded-[10px] shadow-md shadow-[#00000040] h-16 w-full flex-col mt-1 pl-5"/>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="" className="text-xl">Email</label>
                            <input type="email"  className="rounded-[10px] shadow-md shadow-[#00000040] h-16 w-full flex-col mt-1 pl-5"/>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="" className="text-xl">Senha</label>
                            <input type="password"  className="rounded-[10px] shadow-md shadow-[#00000040] h-16 w-full flex-col mt-1 pl-5"/>
                        </div>

                        {/* <div className="mt-12 flex items-center">
                            <input type="checkbox" name="" id="terms" className="size-[1.5rem]  border-green checked:bg-green focus:outline-none"/>
                            <label htmlFor="terms" className="ml-2 text-xl">Aceito todos os <span className="text-green">termos de serviço</span></label>
                        </div> */}
                        <div className="mt-12 flex items-center">
                            <Checkbox.Root className="bg-white size-[25px] border-2 border-green flex items-center justify-center rounded-md p-0" id="c1">
                                <Checkbox.Indicator className="text-white bg-green">
                                    <CheckIcon />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            <label htmlFor="c1" className="ml-2 text-xl">Aceito todos os <span className="text-green">termos de serviço</span></label>
                        </div>


                        <div className="text-center">
                            <button className="mt-[120px] bg-green rounded-full text-white border-2 w-full px-32 py-8 text-xl">Continuar</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}