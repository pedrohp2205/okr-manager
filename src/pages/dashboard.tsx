import logo from "../assets/logobanese.png"
import { GrSearch } from "react-icons/gr";
import perfil from "../assets/perfil.png"
import { FaPlus } from "react-icons/fa6";
import { HiTrash } from "react-icons/hi";
import * as Dialog from '@radix-ui/react-dialog'
import * as Popover from '@radix-ui/react-popover';
import { X } from 'lucide-react'
import { FaGears } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom"
import { DashboardItem } from "../components/dashboard-item";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";


interface Item {
    id: string,
    title: string,
    creationDate: Date,
    modificationDate: Date,
}

export function Dashboard() {


    const [items, setItems] = useState<Item[]>([])

    const [title, setTitle] = useState("")


    const [open, setOpen] = useState(false)
    const wait = () => new Promise((resolve) => setTimeout(resolve, 600));

    function handleTitleChanged(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function handleSaveItem() {
        const newItem = {
            id: crypto.randomUUID(),
            title: title,
            creationDate: new Date(),
            modificationDate: new Date(),
        }

        if(title == "") {
            toast.error("Campo Título vazio.")
            return
        }

        setItems([newItem,...items])
        
        setTitle("")
        toast.success("OKR Salvo com sucesso")
        wait().then(() => setOpen(false))

        



        
    }



    return(
        <Popover.Root>
            <Dialog.Root open={open} onOpenChange={setOpen}>
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
                                    <Popover.Trigger><img src={perfil} alt=""  className="max-w-20 max-h-20" /></Popover.Trigger>
                                </div>
                            </div>
                        </nav>
                    </header>


                    <main className="px-12 py-5">
                        <div className="flex gap-12 items-center">
                            <h1 className="text-4xl font-bold">Todas as OKRs</h1>

                            <Dialog.Trigger asChild><button className="flex items-center gap-5 h-16 w-[11.625rem] bg-[#d3d3d3] shadow-md shadow-[#00000040] p-5 text-xl rounded-lg"><FaPlus />Novo OKR</button></Dialog.Trigger>
                            
                        </div>

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


                                
                                {items.map(item => {
                                    return <DashboardItem key={item.id} dashboardItem={item}/>
                                })}

                            </tbody>
                        </table>

                        


                    </main>
                </div>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />


                    <Dialog.Content className="fixed inset-0 flex w-full flex-col overflow-hidden p-12 bg-white outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[346px] md:max-w-[600px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-lg">
                        <Dialog.Close className="absolute right-0 top-0 bg-white p-1.5 text-black hover:text-gray-600">
                            <X className="size-5" />
                        </Dialog.Close>

                        <div className="flex flex-col gap-12 ">
                            <h1 className="text-4xl text-black font-bold">Novo OKR</h1>
                            <input type="text" onChange={handleTitleChanged} value={title} placeholder="Título do Projeto" className="border-b border-[#D9D9D9] pb-2 pl-1 outline-none"/> {/*Esse Input*/}

                            <div className="flex gap-[0.625rem]">                            
                                <button  onClick={handleSaveItem} className="flex items-center justify-center text-center gap-5 h-16 w-[15.312rem] bg-[#d3d3d3] shadow-md shadow-[#00000040] p-5 text-xl rounded-lg hover:bg-[#a3a3a3]"><FaPlus />Criar</button>


                                <Dialog.Close><button className="flex items-center justify-center text-center gap-5 h-16 w-[15.312rem] bg-[#d3d3d3] shadow-md shadow-[#00000040] p-5 text-xl rounded-lg hover:bg-[#a3a3a3]">Cancelar</button></Dialog.Close>
                            </div>
                        </div> 
                    </Dialog.Content>

                </Dialog.Portal>
                

                <Popover.Portal>
                    <Popover.Content
                        className="rounded-[30px] px-4 py-5 w-[200px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] "
                        sideOffset={5}
                    >

                        <div className="flex flex-col gap-1">
                            <div className="text-center flex text-xl gap-[10px]">
                                <FaGears size={30}/>
                                <p>Configurações</p>
                            </div>

                            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>

                            <div className="text-center flex text-xl gap-[10px]">
                                <IoLogOut size={30}/>
                                <Link to="/" ><button>Sair</button></Link>
                            </div>
                        </div>

                        <Popover.Arrow className="fill-white" />
                    </Popover.Content>
                </Popover.Portal>

            </Dialog.Root>
        </Popover.Root>

    )
}