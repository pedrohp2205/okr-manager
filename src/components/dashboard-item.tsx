import { HiTrash } from "react-icons/hi";
import logo from "../assets/perfil.png"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface dashboardItem {
    dashboardItem:{
        title: string,
        creationDate: Date,
        modificationDate: Date,
    }

}


export function DashboardItem({dashboardItem}: dashboardItem) {


    
    return(
        <tr className="border-b  border-[#D9D9D9]">
            <td className=" py-2.5  text-left  text-xl">{dashboardItem.title}</td>
            <td className=" py-2.5  "><img src={logo} className="size-10 ml-[35px]"/></td>
            <td className=" py-2.5  text-left text-xl">{formatDistanceToNow(dashboardItem.creationDate, {locale: ptBR, addSuffix: true}) }</td>
            <td className=" py-2.5  text-left text-xl">{formatDistanceToNow(dashboardItem.modificationDate, {locale: ptBR, addSuffix: true}) }</td>
            <td className=" py-2.5  text-left text-xl"><button><HiTrash size={20}></HiTrash></button> </td>
        </tr> 
    )
}