import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { ChartBarIcon } from '@heroicons/react/24/outline'

function Post({ post }) {
    return (
        <div className='flex p-3 cursor-pointer border-b border-gray-200 '>

            <img className='h-11 w-11 rounded-full mr-4' src={post.userImg} alt="" />
            {/*right side */}
            <div className=''>

                {/* header*/}
                <div className='flex items-center justify-between'>

                    {/*post user info */}
                    <div className='flex items-center space-x-1'>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
                        <span className='text-sm sm:text-[15px]'>{post.userName}</span>
                        <span className='text-sm sm:text-[15px] hover:underline whitespace-nowrap'>{post.timeStamp}</span>
                    </div>
                    <EllipsisHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
                </div>
                {/*post text*/}
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post.text}</p>
                {/*post img*/}
                <img className='rounded-2xl mr-2' src={post.img} alt="post image" />
                {/*icons*/}
                <div className='flex justify-between text-gray-500 p-2'>

                <ChatBubbleOvalLeftEllipsisIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
                <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
                <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100 ' />
                <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                </div>
            </div>
        </div>
    )
}

export default Post