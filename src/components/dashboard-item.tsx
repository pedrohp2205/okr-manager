import { HiTrash } from "react-icons/hi";
import logo from "../assets/perfil.png"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function DashboardItem() {

    const formattedDate = formatDistanceToNow(new Date(2024, 1, 11), {
        addSuffix: true,
        locale: ptBR,
      })
    
    return(
        <div className="flex mt-12 justify-between text-xl border-b pb-3">
        <p className="">Contratar o squad 6 que desenvolveu o OKR Manager</p>

        <div className="flex justify-evenly flex-1 max-w-[1200px] ">
            <div>
                <img src={logo} alt="" className="size-10"/>
            </div>

            
            <p>{formattedDate}</p>
            <p>{formattedDate}</p> 
            <HiTrash size={20}/>
        </div>
    </div>
    )
}