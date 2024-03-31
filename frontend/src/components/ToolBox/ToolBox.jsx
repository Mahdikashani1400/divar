import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ToolBox() {
    return (
        <div>
            <button className='relative h-8 w-full text-primary-gray text-[.75rem] cursor-pointer transition-all hover:boreder'>
                <div className="absolute h-8 -z-10 ">
                    <input inputMode='numeric' autoComplete='off' type="text" className='input w-full  bg-transparent border  border-primary-gray/50 rounded-md  h-full' style={{ borderWidth: "1px" }} />
                </div>
                <div className="flex justify-between items-center h-8 px-2">
                    <p>مثلا 8,000,000</p>
                    <div className='flex items-center gap-1 text-primary-gray'>
                        <span>تومان</span>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            </button>
        </div>
    )
}
