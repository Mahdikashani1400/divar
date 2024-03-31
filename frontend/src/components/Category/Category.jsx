import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { BsPhone, BsCarFront } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { FiWatch } from "react-icons/fi";
import { ImDice } from "react-icons/im";
import { TbUsers } from "react-icons/tb";
import { PiOfficeChairBold, PiPaintBrushHouseholdThin, PiSuitcaseSimpleLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Category({ isArrow }) {
    return (
        <>
            {isArrow ? <ul className="category-list_items" >
                <a href='#' className="" >
                    <div className="">
                        <MdMapsHomeWork />
                        <span>املاک</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <BsCarFront />
                        <span>وسایل نقلیه</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <BsPhone />
                        <span>کالای دیجیتال</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <LuLamp />
                        <span>خانه و آشپزخانه</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <PiPaintBrushHouseholdThin />
                        <span>خدمات</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <FiWatch />
                        <span>وسایل شخصی</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <ImDice />
                        <span>سرگرمی و فراغت</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <TbUsers />
                        <span>اجتماعی</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <PiOfficeChairBold />
                        <span>تجهیزات و صنعتی</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
                <a href='#' className="" >
                    <div className="">
                        <PiSuitcaseSimpleLight />
                        <span>استخدام و کاریابی</span>
                    </div>
                    <MdOutlineKeyboardArrowLeft />
                </a>
            </ul> :
                <ul className="category-list_items" >
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
                </ul>}
        </>
    )
}
