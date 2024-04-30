import { HiTrash } from "react-icons/hi";
import logo from "../assets/perfil.png"
// import { formatDistanceToNow } from 'date-fns'
// import { ptBR } from 'date-fns/locale'

export function DashboardItem() {

    // const formattedDate = formatDistanceToNow(new Date(2024, 1, 11), {
    //     addSuffix: true,
    //     locale: ptBR,
    //   })
    
    return(
        <table className="text-black mt-10 w-full">
            <thead>
                <tr className="border-b  border-[#D9D9D9]">
                    <th className="py-2.5  text-left  text-xl " >Nome</th>
                    <th className="py-2.5  text-left text-xl ">Proprietário</th>
                    <th className="py-2.5 text-left  text-xl ">Data de Criação</th> 
                    <th className="py-2.5   text-left text-xl ">Ultima Modificação</th>
                    <th className="py-2.5 text-xl "> <HiTrash size={20} /></th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b  border-[#D9D9D9]">
                    <td className=" py-2.5  text-left  text-xl">Contratar o squad 6 que desenvolveu o OKR Manager</td>
                    <td className=" py-2.5  "><img src={logo} className="size-10 ml-[35px]"/></td>
                    <td className=" py-2.5  text-left text-xl">6 de jun. de 1996</td>
                    <td className=" py-2.5  text-left text-xl">11 de fev. de 2024</td>
                    <td className=" py-2.5  text-left text-xl"><HiTrash size={20} /></td>
                </tr>
            </tbody>
        </table>
    )
}