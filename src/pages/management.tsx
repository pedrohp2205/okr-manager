import { useParams } from "react-router-dom"

interface Item {
    id: string;
    title: string;
    creationDate: string;
    modificationDate: string;
}

export function Management() {

    const { id } = useParams();
    const storedItems = localStorage.getItem("items");

    let specificItem

    if (storedItems !== null) {
        const itemsArray: Item[] = JSON.parse(storedItems);
        specificItem = itemsArray.find(item => item.id === id);
    }
    

    return(
        <div><p>{specificItem?.title}</p></div>
    )
}