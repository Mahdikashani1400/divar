import React from 'react'
import PostBox from '../../components/PostBox/PostBox'
import Navbar from '../../components/Navbar/Navbar'
import Icons from '../../Icons/Icons'
import Sidebar from '../../components/Sidebar/Sidebar'
export default function Index() {
    return (
        <>
            <Icons />
            <Navbar />
            <div className="container ">
                <div className="flex justify-end 2xl:mx-10">
                    <Sidebar />
                    <main className='my-16 mr-14'>
                        <div className="container">
                            <div className="post-box_container grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                                <PostBox />
                            </div>
                        </div>
                    </main>
                </div>
            </div>


        </>
    )
}
