import React from 'react'

import Category from '../Category/Category';
import SubCatSidebar from '../SubCatSidebar/SubCatSidebar';
import DoublSubCatSidebar from '../DoublSubCatSidebar/DoublSubCatSidebar';
import ToolBox from '../ToolBox/ToolBox';

export default function Sidebar() {



    return (
        <div className="fixed top-16 mr-10 right-0  justify-center py-8 px-4">
            <h2 className='text-primary-black text-xs font-normal py-2'>دسته ها</h2>
            <Category />
            {/* <SubCatSidebar /> */}
            {/* <DoublSubCatSidebar /> */}
            <ToolBox />
        </div >
    )
}

