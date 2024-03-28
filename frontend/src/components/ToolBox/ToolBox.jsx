import React from 'react'

export default function ToolBox() {
    return (
        <div>
            <button className='relative text-primary-gray '>
                <div className="absolute  ">
                    <input type="text" className='input  bg-transparent border  border-primary-gray/50 rounded-md z-20' style={{ borderWidth: "1px" }} readOnly />
                </div>
                <p>مثلا 8,000,000</p>
                <div className="">
                    <span>تومان</span>
                </div>
            </button>
        </div>
    )
}
