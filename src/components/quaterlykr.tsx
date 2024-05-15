import okrlogo from "../assets/okr-logo.png"
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { useState } from 'react';
import botaookr from "../assets/botaookr.svg"
import botaoxokr from "../assets/botaoxokr.svg"
import infokrlogo from "../assets/infokrlogo.svg"
import calendarinfokr from "../assets/calendarinfokr.svg"
import bellinfokr from "../assets/bellinfokr.svg"
import rsinfokr from "../assets/rsinfokr.svg"

export function QuaterlyKr(props: NodeProps) {
    const [isButtonVisible, setIsButtonVisible] = useState(false)
    const {setNodes} = useReactFlow()

    const {getNode} = useReactFlow()
    
    const nodepos = getNode(props.id)
    const position = nodepos?.position
    
    const addQuaterlyGoal = () => {
        if (position) {
            setNodes((prevNodes) => [
                ...prevNodes,
                {
                    id: crypto.randomUUID(),
                    type: 'activities',
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
            <div className="w-[12.5rem] h-fit bg-[#D3D3D3] rounded-[10px] p-[5px] relative ">
                <Handle 
                    id="left" 
                    type="target" 
                    position={Position.Left}
                    className="-left-2 size-1 bg-transparent border border-green"
                />
                <Handle 
                    id="right" 
                    type="source" 
                    position={Position.Right}
                    className="-right-2 size-1 bg-transparent border border-green"
                />
                <div className="flex gap-1">
                    <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                        <img src={okrlogo} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                    </div>
                    <div className="text-[0.5rem] w-[7.188rem] h-[0.75rem] font-bold bg-white rounded-md pl-[0.313rem]">KR Trimestral</div>
                </div>
                
                <div className="flex">
                    <textarea name="" id="" placeholder="Descrição do KR Trimestral" spellCheck={false} className="bg-transparent outline-none text-xs resize-none m-auto text-center overflow-auto flex justify-center items-center leading-9 max-h-10 placeholder:text-[0.625rem]"></textarea>
                </div>

                {isButtonVisible && (
                    <div>
                        <button className="absolute right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold size-8 rounded-full mt-3 flex items-center justify-center" onClick={addQuaterlyGoal}>
                            <img src={botaookr} alt="" />
                        </button>
                        <button className="absolute right-10 bg-[#FE1616] hover:bg-[#FE1616] text-white font-bold size-8 rounded-full mt-3 flex items-center justify-center" onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== props.id) )

                            }
                        >
                            <img src={botaoxokr} alt="" />
                        </button>
                    </div>
                )}


            </div>

                {/* INFO KR */}
            <div className="w-[12.5rem] h-fit bg-[#81998F] rounded-[10px] p-[5px] relative  mt-10">
                <div className="flex gap-1">
                    <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                        <img src={infokrlogo} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                    </div>
                    <div className="text-[0.5rem] w-[5rem] h-[0.75rem] font-bold bg-white rounded-md pl-[0.313rem]">Info KR</div>
                </div>

                <div className="flex flex-col text-[10px] font-[700] text-white mt-[5px] gap-1">

                    <div className="flex items-center gap-[5rem]">
                        <p>Mês</p>
                        <div className="flex justify-evenly w-[6.25rem]">
                            <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                                <img src={calendarinfokr} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                            </div>

                            <input type="date" className="w-[3.5rem] rounded-[10px] text-black text-[6px] text-center outline-none "/>

                            <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                                <img src={bellinfokr} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[4.813rem]">
                        <p>Meta</p>

                        <div className="flex gap-[0.25rem] items-center">
                            <div className="bg-white  size-3 rounded-[4px] flex content-center items-center justify-center ">
                                <img src={rsinfokr} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                                
                            </div>
                            <input type="number" className="w-[4.4rem] border-b border-white bg-transparent outline-none text-right"  />
                        </div>
                    </div>

                    <div className="flex items-center gap-[3.8rem]">
                        <p>Medição</p>

                        <div className="flex gap-[0.25rem] items-center">
                            <div className="bg-white  size-3 rounded-[4px] flex content-center items-center justify-center ">
                                <img src={rsinfokr} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                                
                            </div>
                            <input type="number" className="w-[4.4rem] border-b border-white bg-transparent outline-none text-right" />
                        </div>
                    </div>

                    <div className="flex items-center gap-[2.8rem]">
                        <p>Responsável</p>

                        <div className="flex items-center">
                            <input type="text" className=" appearance-none w-[5.4rem] border-b border-white bg-transparent outline-none text-right inner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
