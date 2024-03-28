import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

import { MdMapsHomeWork } from "react-icons/md";
import { BsPhone, BsCarFront } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { FiWatch } from "react-icons/fi";
import { ImDice } from "react-icons/im";
import { TbUsers } from "react-icons/tb";
import { PiOfficeChairBold, PiPaintBrushHouseholdThin, PiSuitcaseSimpleLight } from "react-icons/pi";
export default function DoublSubCatSidebar() {
    return (
        <ul className='category-list_items'>
            <li ><a className='flex items-center gap-2 ' href="#">
                <IoMdArrowForward className=' ' />
                <span>                همه آگهی ها</span>
            </a></li>
            <li className='flex flex-col'><a href="#" className='text-primary-black font-bold flex gap-2 text-normal items-center'>
                <MdMapsHomeWork />
                <span>املاک</span></a>
                <ul className='category-list_items mr-12 w-full'>
                    <li className='flex-col'><a href="" className='text-primary-black font-bold flex gap-2 text-normal'>فروش مسکونی</a>
                        <ul className='category-list_items w-full mr-4 child:pr-2 child:border-r-2 child:border-black/[12%] child:text-[.75rem]'>

                            <li className='subset-cat active'><a href="">آپارتمان</a></li>
                            <li><a href="">خانه و ویلا</a></li>
                            <li><a href="">
                                زمین و کلنگی</a></li>
                        </ul>
                    </li>

                </ul>
            </li>
        </ul>
    )
}
