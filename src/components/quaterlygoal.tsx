import okrlogo from "../assets/okr-logo.png"
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { useState } from 'react';
import botaookr from "../assets/botaookr.svg"
import botaoxokr from "../assets/botaoxokr.svg"


export function QuaterlyGoal(props: NodeProps) {
    const [isButtonVisible, setIsButtonVisible] = useState(false)

    const {setNodes} = useReactFlow()

      
    const {getNode} = useReactFlow()
    
    const nodepos = getNode(props.id)
    const position = nodepos?.position
    
    const addQuaterlyKr = () => {

        
        if (position) {
            setNodes((prevNodes) => [
                ...prevNodes,
                {
                    id: crypto.randomUUID(),
                    type: 'quaterlykr',
                    position: { x: position.x + 230, y: position.y },
                    data: { /* dados opcionais do nó */ }
                }
            ]);
        }
       

       
    };

    



    return (
        <div className="w-[12.5rem] h-[6.5rem]"
            onMouseEnter={() => setIsButtonVisible(true)} 
            onMouseLeave={() => setIsButtonVisible(false)} 
        >
            <div className="w-[12.5rem] h-16 bg-[#D3D3D3] rounded-[10px] p-[5px] relative">
                <Handle 
                    id="right" 
                    type="source" 
                    position={Position.Right}
                    className="-right-2 size-1 bg-transparent border border-green"
                />
                <Handle 
                    id="left" 
                    type="target" 
                    position={Position.Left}
                    className="-left-2 size-1 bg-transparent border border-green"
                />
                <div className="flex gap-1">
                    <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                        <img src={okrlogo} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                    </div>
                    <div className="text-[0.5rem] w-[7.188rem] h-[0.75rem] font-bold bg-white rounded-md pl-[0.313rem]">Objetivo Trimestral</div>
                </div>
                
                <div className="flex">
                    <textarea name="" id="" placeholder="Descrição do Objetivo Trimestral" spellCheck={false} className="bg-transparent outline-none text-xs resize-none m-auto text-center overflow-auto flex justify-center items-center leading-9 max-h-10 placeholder:text-[0.625rem]"></textarea>
                </div>

                {isButtonVisible && (
                    <div>

                    
                        <button className="absolute right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold size-8 rounded-full mt-3 flex items-center justify-center" onClick={addQuaterlyKr}>
                            <img src={botaookr} alt="" />
                        </button>

                        <button className="absolute right-10 bg-[#FE1616] hover:bg-[#FE1616] text-white font-bold size-8 rounded-full mt-3 flex items-center justify-center" onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== props.id) )}>
                            <   img src={botaoxokr} alt="" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
