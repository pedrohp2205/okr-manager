import React, { useState } from 'react'

interface props {
  item :{
    id: Number,
    name: string,
    done: boolean,
  }

}

export const ListItem = ({item}:props) => {

  const [isChecked, setIsCheked] = useState(item.done)

  return (
    <div className="flex items-center mb-[0.625rem]">
        <input 
			type="checkbox" 
        	className="size-3 mr-[0.313rem]" 
			checked={isChecked}
			onChange={e => setIsCheked(e.target.checked)}
        />
        <label>{item.name}</label>
    </div>

  )
}


