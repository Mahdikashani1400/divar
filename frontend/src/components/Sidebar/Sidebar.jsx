import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { BsPhone, BsCarFront } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { FiWatch } from "react-icons/fi";
import { ImDice } from "react-icons/im";
import { TbUsers } from "react-icons/tb";
import { PiOfficeChairBold, PiPaintBrushHouseholdThin, PiSuitcaseSimpleLight } from "react-icons/pi";

export default function Sidebar() {



    return (
        <div className="fixed top-16 mr-10 right-0  justify-center py-8 px-4">
            <h2 className='text-primary-black text-xs font-normal py-2'>دسته ها</h2>
            <ul className="w-48 my-2 flex flex-col child:py-1.5 text-primary-gray  child:flex child:gap-2 child:transition-all child:duration-[360ms] hover:child:text-black/90 text-normal" >
                <a href='#' className=""  >
                    <MdMapsHomeWork />
                    <span>املاک</span>
                </a>
                <a href='#' className="" >
                    <BsCarFront />
                    <span>وسایل نقلیه</span>
                </a>
                <a href='#' className="" >
                    <BsPhone />
                    <span>کالای دیجیتال</span>
                </a>
                <a href='#' className="" >
                    <LuLamp />
                    <span>خانه و آشپزخانه</span>
                </a>
                <a href='#' className="" >
                    <PiPaintBrushHouseholdThin />
                    <span>خدمات</span>
                </a>
                <a href='#' className="" >
                    <FiWatch />
                    <span>وسایل شخصی</span>
                </a>
                <a href='#' className="" >
                    <ImDice />
                    <span>سرگرمی و فراغت</span>
                </a>
                <a href='#' className="" >
                    <TbUsers />
                    <span>اجتماعی</span>
                </a>
                <a href='#' className="" >
                    <PiOfficeChairBold />
                    <span>تجهیزات و صنعتی</span>
                </a>
                <a href='#' className="" >
                    <PiSuitcaseSimpleLight />
                    <span>استخدام و کاریابی</span>
                </a>
            </ul>
        </div >
    )
}