import okrlogo from "../assets/okr-logo.png"
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { KeyboardEvent, useState } from 'react';
import listactivitiesplus from "../assets/listactivitiesplus.svg"
import botaoxokr from "../assets/botaoxokr.svg"
import { ListItem } from "./listitem";


type Item = {
    id: Number,
    name: string,
    done: boolean,
}

export function Activities(props: NodeProps) {
    const [isButtonVisible, setIsButtonVisible] = useState(false)

    const {setNodes} = useReactFlow()

    const [list, setList] = useState<Item[]>([])

    const [inputList, setInputList] = useState("")

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code == "Enter" && inputList !== "") {
            handleAddTask()
            setInputList("")
        }
    }

    const handleAddTask = () => {
        let newList = [...list]

        newList.push({
            id: list.length + 1,
            name: inputList,
            done: false,
        })
        setList(newList)
    }

    return (
        <div className="w-[12.5rem] h-[auto]  bg-transparent border border-transparent"
            onMouseEnter={() => setIsButtonVisible(true)} 
            onMouseLeave={() => setIsButtonVisible(false)} 
        >
            <div className="w-[12.5rem]  min-h-[3.5rem] h-fit bg-[#D3D3D3] rounded-[10px] p-[5px] relative mb-20">
                <Handle 
                    id="left" 
                    type="target" 
                    position={Position.Left}
                    className="-left-2 size-1 bg-transparent border border-green"
                />
                <div className="flex gap-1 mb-[0.313rem]">
                    <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                        <img src={okrlogo} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                    </div>
                    <div className="text-[0.5rem] w-[7.188rem] h-[0.75rem] font-bold bg-white rounded-md pl-[0.313rem] ">Atividades</div>
                </div>
                
                <div className="text-[10px]">
                    {list.map((item, index) => (
                        <ListItem key={index} item={item}/>
                    ))}
                    
                    <div className="flex">
                        <img src={listactivitiesplus} alt=""/>
                        <input spellCheck={false} type="text" placeholder="Item da lista" className="placeholder:italic ml-[0.313rem] bg-transparent outline-none" onChange={e=> setInputList(e.target.value)} onKeyUp={handleKeyUp} value={inputList}/>
                    </div>

                </div>

                {isButtonVisible && (
                    <div>

                        <button className="absolute right-0 bg-[#FE1616] hover:bg-[#FE1616] text-white font-bold size-8 rounded-full mt-3 flex items-center justify-center" onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== props.id) )}>
                            <   img src={botaoxokr} alt="" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
