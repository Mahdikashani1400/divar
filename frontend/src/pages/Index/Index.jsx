import React from 'react'
import PostBox from '../../components/PostBox/PostBox'

export default function Index() {
    return (
        <>
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


        </>
    )
}
