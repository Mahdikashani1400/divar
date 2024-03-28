import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { BsPhone, BsCarFront } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { FiWatch } from "react-icons/fi";
import { ImDice } from "react-icons/im";
import { TbUsers } from "react-icons/tb";
import { PiOfficeChairBold, PiPaintBrushHouseholdThin, PiSuitcaseSimpleLight } from "react-icons/pi";
export default function SubCatSidebar() {
    return (
        <ul className='category-list_items'><li><a href="#">همه آگهی ها</a></li>
            <li className='flex flex-col'><a href="#" className='text-primary-black font-bold flex gap-2 text-normal'>
                <MdMapsHomeWork />
                <span>املاک</span></a>
                <ul className='category-list_items mr-12 w-full'>
                    <a href='#' className=""  >

                        <span>املاک</span>
                    </a>
                    <a href='#' className="" >

                        <span>وسایل نقلیه</span>
                    </a>
                    <a href='#' className="" >

                        <span>کالای دیجیتال</span>
                    </a>
                    <a href='#' className="" >

                        <span>خانه و آشپزخانه</span>
                    </a>
                    <a href='#' className="" >

                        <span>خدمات</span>
                    </a>
                    <a href='#' className="" >

                        <span>وسایل شخصی</span>
                    </a>
                    <a href='#' className="" >

                        <span>سرگرمی و فراغت</span>
                    </a>
                    <a href='#' className="" >

                        <span>اجتماعی</span>
                    </a>
                    <a href='#' className="" >

                        <span>تجهیزات و صنعتی</span>
                    </a>
                    <a href='#' className="" >

                        <span>استخدام و کاریابی</span>
                    </a>
                </ul>
            </li></ul>
    )
}
