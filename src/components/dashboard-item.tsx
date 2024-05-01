import { HiTrash } from "react-icons/hi";
import logo from "../assets/perfil.png"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from "react-router-dom";


interface dashboardItem {
    dashboardItem:{
        title: string,
        creationDate: Date,
        modificationDate: Date,
        id: string,
    }

}



export function DashboardItem({dashboardItem}: dashboardItem) {



    return(
            
            
        <tr className="border-b  border-[#D9D9D9]">
            <td className=" py-2.5  text-left  text-xl"><Link to={`/management/${dashboardItem.id}`}>{dashboardItem.title}</Link></td>
            <td className=" py-2.5  "><Link to={`/management/${dashboardItem.id}`}><img src={logo} className="size-10 ml-[35px]"/></Link></td>
            <td className=" py-2.5  text-left text-xl"><Link to={`/management/${dashboardItem.id}`}>{formatDistanceToNow(dashboardItem.creationDate, {locale: ptBR, addSuffix: true}) }</Link></td>
            <td className=" py-2.5  text-left text-xl"><Link to={`/management/${dashboardItem.id}`}>{formatDistanceToNow(dashboardItem.modificationDate, {locale: ptBR, addSuffix: true}) }</Link></td>
            <td className=" py-2.5  text-left text-xl"><button><HiTrash size={20}></HiTrash></button> </td>
        </tr> 



    )
}