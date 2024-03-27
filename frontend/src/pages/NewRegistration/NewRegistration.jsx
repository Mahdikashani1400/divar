import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Icons from '../../Icons/Icons'

export default function NewRegistration() {
    return (
        <>
            <Icons />
            <Navbar />
            <div className='flex justify-center items-center mt-16'>
                <div>
                    <h5 className="text-base font-bold leading-7 line-clamp-2 h-10 break-words text-primary-black dark:text-white ">
                        چه چیزی آگهی می‌کنید؟
                    </h5>
                    <p className="font-normal text-normal text-primary-gray dark:text-gray-400">
                        با جستجو در کادر زیر، دستهٔ آگهی را انتخاب کنید.
                    </p>
                </div>
            </div>
        </>
    )
}
