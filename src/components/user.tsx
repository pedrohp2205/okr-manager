import { HiTrash } from "react-icons/hi";
import logo from "../assets/perfil.png"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from "react-router-dom";
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from "react";
import { X } from 'lucide-react'

interface user {
    user:{
        name: string,
        id: string,
    }

    onUserDeleted: (id: string) => void

}



export function User({user, onUserDeleted}: user) {

    const [open, setOpen] = useState(false)
    const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

    return(
            
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <tr className="border-b  border-[#D9D9D9] hover:bg-[#D3D3D3]">
                <td className=" py-2.5  text-left  text-xl">{user.name}</td>
                <td className=" py-2.5  "><img src={logo} className="size-10 ml-[35px]"/></td>
                <Dialog.Trigger asChild><td className=" py-2.5  text-left text-xl"><button><HiTrash size={20}></HiTrash></button> </td></Dialog.Trigger>
            </tr> 

            <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />


                    <Dialog.Content className="fixed inset-0 flex w-full flex-col overflow-hidden p-12 bg-white outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[346px] md:max-w-[600px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-lg">
                        <Dialog.Close className="absolute right-0 top-0 bg-white p-1.5 text-black hover:text-gray-600">
                            <X className="size-5" />
                        </Dialog.Close>

                        <div className="flex flex-col gap-12 ">
                            <h1 className="text-4xl text-black font-bold">Excluir Usuário</h1>
                            <p className="text-xl">Tem certeza que deseja excluir este Usuário?</p>

                            <div className="flex gap-[0.625rem]">                            
                                <button  
                                    onClick={() => {
                                        wait().then(() => setOpen(false));
                                        onUserDeleted(user.id);
                                    }}
                                    className="flex items-center justify-center text-center gap-5 h-16 w-[15.312rem] bg-[#d3d3d3] shadow-md shadow-[#00000040] p-5 text-xl rounded-lg hover:bg-[#a3a3a3]">
                                        <HiTrash size={20}></HiTrash>Excluir
                                </button>


                                <Dialog.Close><button className="flex items-center justify-center text-center gap-5 h-16 w-[15.312rem] bg-[#d3d3d3] shadow-md shadow-[#00000040] p-5 text-xl rounded-lg hover:bg-[#a3a3a3] max-md:w-[9.312rem]">Cancelar</button></Dialog.Close>
                            </div>
                        </div> 
                    </Dialog.Content>

                </Dialog.Portal>

       
        </Dialog.Root>





    )
}

// onClick={() => onItemDeleted(dashboardItem.id)}