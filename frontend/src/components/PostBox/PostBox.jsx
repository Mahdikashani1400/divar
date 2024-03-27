import { Card } from 'flowbite-react'
import React from 'react'

export default function PostBox() {
    const customTheme = {
        "root": {
            "base": "flex p-4 gap-5 rounded-sm text-end border border-gray-200 bg-white shadow-nav dark:border-gray-700 dark:bg-gray-800",
            "children": "flex h-full flex-col justify-center gap-1",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-md",
                "on": "h-96 w-full rounded-md  md:h-36 md:w-36 md:rounded-md md:rounded-md"
            }
        }
    }
    return (
        <>
            <article className="" dir='ltr'>
                <Card className="max-w-sm" imgSrc="/images/post-1.jpg" horizontal theme={customTheme}>
                    <h5 className="text-base font-bold leading-7 line-clamp-2 h-14 break-words text-primary-black dark:text-white">
                        اپل iPhone 6s ۶۴ گیگابایت
                    </h5>
                    <span className='text-normal leading-6 font-semibold text-primary-gray'>در حد نو</span>
                    <p className="font-normal text-normal text-primary-gray dark:text-gray-400">
                        ۴,۵۰۰,۰۰۰ تومان
                    </p>
                    <span className='text-[13px] leading-6 text-primary-black'>لحظاتی پیش در تهرانسر</span>
                </Card>
            </article>
        </>
    )
}