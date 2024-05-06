import { useParams } from "react-router-dom"
import logo from "../assets/logobanese.png"
import perfil from "../assets/perfil.png"
import { ChangeEvent, useState } from 'react';

interface Item {
    id: string;
    title: string;
    creationDate: string;
    modificationDate: string;
}

export function Management() {

    const { id } = useParams();
    const storedItems = localStorage.getItem("items");


    let specificItem: Item | undefined;

    if (storedItems !== null) {
        const itemsArray: Item[] = JSON.parse(storedItems);
        specificItem = itemsArray.find(item => item.id === id);
    }
    
    const [editedTitle, editTitle] = useState(specificItem?.title)

    function handleEditTitle(event: ChangeEvent<HTMLInputElement>) {
        const newTitle = event.target.value;
        editTitle(newTitle);
    
        if (storedItems !== null) {
            const itemsArray: Item[] = JSON.parse(storedItems);
            const updatedItemsArray = itemsArray.map(item => {
                if (item.id === id && specificItem) {
                    return { ...item, title: newTitle }
                }
                return item;
            });
    
            localStorage.setItem("items", JSON.stringify(updatedItemsArray))
        }
    }
    

    
      
      
    


    
    return(
        <div>

            <header>
                <nav className=" h-24 px-12 py-3 flex border-b-[1px] border-[#d9d9d9] items-center justify-between">
                    <img src={logo} alt="Logo Banese" />
                    <input type="text" className=" text-xl  h-7 w-full max-w-[43.75rem] focus:outline-none border-b border-[#d3d3d3] text-center " onChange={handleEditTitle } value={editedTitle}/>

                    <img src={perfil} alt=""  className="max-w-20 max-h-20" />

                </nav>
            </header>
        </div>
    )
}