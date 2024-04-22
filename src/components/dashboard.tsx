import logo from "../assets/logobanese.png"
import { GrSearch } from "react-icons/gr";
import perfil from "../assets/perfil.png"
import { FaPlus } from "react-icons/fa6";
export function Dashboard() {

    return(

        <div>
            <header>
                <nav className=" h-24 px-12 py-3 flex border-b-[1px] border-[#d9d9d9] items-center justify-between">
                    <img src={logo} alt="Logo Banese" />
                    <div className="flex max-h-12 max-w-[37.5rem] px-5 py-2 rounded-[30px]  bg-[#d3d3d3] items-center gap-5 shadow-md shadow-[#00000040]">
                        <GrSearch size={25}/>
                        <input type="text" placeholder="Buscar no OKR Manager" className=" text-xl bg-[#d3d3d3] h-12 w-[37.5rem] focus:outline-none placeholder-black "/>
                    </div>

                    <div>
                        <div className="flex gap-5">
                            <p className="text-xl text-right border-green border-b-4">Seja bem-vindo(a),<br /> undefined !</p>
                            <img src={perfil} alt=""  className="max-w-20 max-h-20"/>
                        </div>
                    </div>
                </nav>
            </header>


            <main className="px-12 py-5">
                <div className="flex gap-12 items-center">
                    <h1 className="text-4xl font-bold">Todas as OKRs</h1>
        
                    <button className="flex items-center gap-5 h-16 w-[11.625rem] bg-[#d3d3d3] shadow-md shadow-[#00000040] p-5 text-xl rounded-lg"><FaPlus />Novo OKR</button>
                    
                </div>
            </main>
        </div>



    )
}