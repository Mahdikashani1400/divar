import { ListGroup, theme } from 'flowbite-react'
import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { BsCarFront } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { FiWatch } from "react-icons/fi";
import { ImDice } from "react-icons/im";
import { TbUsers } from "react-icons/tb";
import { PiOfficeChairBold } from "react-icons/pi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

export default function Sidebar() {
    const categoryListStyles =
    {
        "root": {
            "base": "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        },
        "item": {
            "base": "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0 ",
            "link": {
                "base": "flex w-full justify-between items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
                "active": {
                    "off": "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                    "on": "bg-cyan-700 text-white dark:bg-gray-800"
                },
                "disabled": {
                    "off": "",
                    "on": "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900"
                },
                "href": {
                    "off": "",
                    "on": ""
                },
                "icon": "mr-7 h-4 w-4 fill-current"
            }
        }
    }
    //  {


    return (
        <div className="flex justify-center">
            <ListGroup className="w-48 text-primary-gray" theme={{ theme: categoryListStyles }}>
                <ListGroup.Item className="child:flex child:gap-3" icon={MdMapsHomeWork} >
                    <span>املاک</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={BsCarFront}>
                    <span>وسایل نقلیه</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={BsPhone}>
                    <span>کالای دیجیتال</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={LuLamp}>
                    <span>خانه و آشپزخانه</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={PiPaintBrushHouseholdThin}>
                    <span>خدمات</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={FiWatch}>
                    <span>وسایل شخصی</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={ImDice}>
                    <span>سرگرمی و فراغت</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={TbUsers}>
                    <span>اجتماعی</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={PiOfficeChairBold}>
                    <span>تجهیزات و صنعتی</span>
                </ListGroup.Item>
                <ListGroup.Item className="child:flex child:gap-3" icon={PiSuitcaseSimpleLight}>
                    <span>استخدام و کاریابی</span>
                </ListGroup.Item>
            </ListGroup>
        </div >
    )
}