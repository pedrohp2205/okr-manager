import { useParams } from "react-router-dom"
import logo from "../assets/logobanese.png"
import perfil from "../assets/perfil.png"
import { ChangeEvent, useState } from 'react';
import ReactFlow, { Controls, Background, Node, ConnectionMode, useEdgesState, Connection, addEdge, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import {white} from "tailwindcss/colors"
import { AnnualGoal } from "../components/anualgoal";
import { useCallback } from "react";
import { AnnualKr } from "../components/anualkr";
import { DefaultEdge } from "../components/edges/DefaultEdge";
import { QuaterlyGoal } from "../components/quaterlygoal";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { QuaterlyKr } from "../components/quaterlykr";
import { Activities } from "../components/activities";
import logomobile from "../assets/logo.png"

interface Item {
    id: string;
    title: string;
    creationDate: string;
    modificationDate: string;
}

const NODE_TYPES = {
    anualgoal: AnnualGoal,
    anualkr: AnnualKr,
    quaterlygoal: QuaterlyGoal,
    quaterlykr: QuaterlyKr,
    activities: Activities,
}

const EDGE_TYPES = {
    default: DefaultEdge,
}

const INITIAL_NODES = [
    {
        id: crypto.randomUUID(),
        type: "anualgoal",
        position: {
            x:0, 
            y:0,

        },
        data: {},

    }

] satisfies Node[]



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
    

    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)

    const onConnect = useCallback((connection: Connection) => {
        return setEdges(edges => addEdge(connection, edges))
    }, [])
    
    return(
        <div className="w-screen h-screen">

            <header className="fixed w-full bg-white z-10">
                <nav className=" h-24 px-12 py-3 flex border-b-[1px] border-[#d9d9d9] items-center justify-between max-md:px-[0.62rem] ">
                    <img src={logo} alt="Logo Banese" className="max-md:hidden"/>
                    <img src={logomobile} alt="" className="hidden max-md:flex max-md:size-[3.125rem]"/>
                    <input type="text" spellCheck={false} className=" text-xl  h-7 w-full max-w-[43.75rem] focus:outline-none border-b border-[#d3d3d3] text-center max-md:max-w-[9.3rem]" onChange={handleEditTitle } value={editedTitle}/>

                    <img src={perfil} alt=""  className="max-w-20 max-h-20 max-sm:size-[2.5rem]" />

                </nav>
            </header>
            <Link to="/dashboard"><div className="fixed size-[2.813rem] z-10 top-[6.875rem] left-[3.125rem] bg-[#D3D3D3] rounded-[10px] flex items-center justify-center max-md:left-3" ><FaHouse size={25}/></div></Link>
            <ReactFlow
                nodeTypes={NODE_TYPES}
                edgeTypes={EDGE_TYPES}
                nodes={nodes}
                connectionMode={ConnectionMode.Strict}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                defaultEdgeOptions={{
                    type: "default",
                }}
                fitView
            >
                <Background
                    color={white}
                />
                <Controls/>
            </ReactFlow>
        </div>
    )
}