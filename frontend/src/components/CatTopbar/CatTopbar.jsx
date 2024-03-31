import React from 'react'
import Category from '../Category/Category'

export default function CatTopbar() {
    return (
        <>
            <div className="bg-white absolute p-8 top-11 left-0  mt-1 ml-10 ">

                <div className="flex ">
                    <div className="top-bar_category w-44 pe-4">
                        <Category isArrow={true} />
                    </div>
                    <div className="mr-8 pr-4 w-[947px] border-r border-primary-gray/15">
                        <div className=" pr-5 ">
                            <div className="flex flex-col gap-y-6 gap-x-16 min-h-[496px] max-h-[520px] ">
                                <div className="navbar-category_subset ">
                                    <a href="">فروش مسکونی</a><a href="">آپارتمان</a><a href="">خانه و ویلا</a><a href="">زمین و کلنگی</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
