import React from 'react'

export default function () {
    return (
        <>
            <header className="bg-white sticky  w-full p-5">

                <nav className='flex justify-between items-center'>
                    <div className="right_side-nav mr-5 child:px-4 h-12 w-12">
                        <a href='#' className="border border-e border-black/10">
                            <img src="/download.svg" className='h-12 w-12' alt="" />
                        </a>
                    </div>
                    <div className="left_side-nav">
                        <ul className='flex gap-2 child:px-4'>
                            <a href="#" className=''>دیوار من</a>
                            <a href="#" className=''>چت</a>
                            <a href="#" className=''>پشتیبانی</a>
                            <a href="#" className='mr-2'>ثبت آگهی</a>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )
}
