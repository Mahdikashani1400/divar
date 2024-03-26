import React from 'react'

export default function () {
    return (
        <>
            <header className="bg-white sticky  w-full py-2 px-14 shadow-nav">

                <nav className='flex justify-between items-center'>
                    <div className="right_side-nav flex items-center">
                        <a href='#' className=" relative inline-block  pe-4 mr-5 me-2 ">
                            <img src="/download.svg" className='h-12 w-12' alt="" />
                            <span className='absolute w-[1.2px] h-6 top-3 left-0 bg-black/10'></span>
                        </a>
                        <ul className='nav-list_container text-[14px] tracking-tighter child:h-fit '>
                            <a href="" className='nav-list_item'>
                                <svg className='w-5 h-5 fill-primary-gray'>
                                    <use href='#mapIcon'>
                                    </use>
                                </svg>
                                <span>تهران</span>
                            </a><a href="" className='nav-list_item'>
                                <span>دسته ها</span>
                                <svg className='w-3 h-3   text-black/80'>
                                    <use href='#arrowDownIcon'>
                                    </use>
                                </svg>
                            </a>
                        </ul>
                        <div className="bg-black/5 h-fit mr-4">
                            <form action="">
                                <div className="relative">
                                    <div className="absolute top-3 right-2.5 text-gray-400 w-5 h-5 transition-all hover:text-black/20">
                                        <svg className='w-4 h-4  '>
                                            <use href='#searchIcon'>
                                            </use>
                                        </svg>
                                    </div>
                                    <input type="text" className='nav-search_input w-[450px] pr-10 text-[14px] h-10 text-black font-bold tracking-wide placeholder:text-gray-400/80 placeholder:text-xs' placeholder='جستجو در همه آگهی ها' />
                                </div>
                            </form>
                        </div>


                    </div>
                    <div className="left_side-nav">
                        <ul className='nav-list_container'>
                            <a href="#" className='nav-list_item'>
                                <svg className='w-5 h-5 fill-primary-gray'>
                                    <use href='#userIcon'>
                                    </use>
                                </svg>
                                <span>دیوار من</span>
                            </a>
                            <a href="#" className='nav-list_item'>
                                <svg className='w-5 h-5'>
                                    <use href='#chatIcon'>
                                    </use>
                                </svg>
                                <span>چت</span>
                            </a>
                            <a href="#" className='nav-list_item'>

                                <span>پشتیبانی</span></a>
                            <a href="#" className='mr-2 bg-primary_red text-[.875rem] text-white font-bold rounded-md hover:bg-primary_red/90'>ثبت آگهی</a>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )
}
