import okrlogo from "../assets/okr-logo.png"

export function AnnualGoal() {
    return (
        <div className="w-[12.5rem] h-16 bg-[#D3D3D3] rounded-[10px] p-[5px]">
            <div className="flex gap-1">
                <div className="bg-white  size-3 rounded-full flex content-center items-center justify-center ">
                    <img src={okrlogo} alt="" className="w-[0.5rem] h-[0.375rem] "/>
                </div>
                <div className="text-[0.5rem] w-[7.188rem] h-[0.75rem] font-bold bg-white rounded-md pl-[0.313rem]">Objetivo Anual</div>
            </div>

            <div className="flex ">
                <textarea name="" id="" placeholder="Descrição do Objetivo Anual" spellCheck={false} className="bg-transparent outline-none text-xs resize-none m-auto text-center overflow-auto flex justify-center items-center leading-9 max-h-10 placeholder:text-[0.625rem]"></textarea>
            </div>
            
        </div>
    )
}