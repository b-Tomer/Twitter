import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon } from '@heroicons/react/20/solid'
import { HashtagIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/outline'
import { InboxIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'

function SideBar() {
    return (
        <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full xl:ml-24">
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image
                    src='https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png'
                    height={50}
                    width={50}
                />
            </div>
            <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text='Home' Icon={HomeIcon} active />
            <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
            <SidebarMenuItem text='Notification' Icon={BellIcon} />
            <SidebarMenuItem text='Messages' Icon={InboxIcon} />
            <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
            <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
            <SidebarMenuItem text='Profile' Icon={UserIcon} />
            <SidebarMenuItem text='More' Icon={EllipsisHorizontalCircleIcon} />
        </div>

            <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden lg:inline'>
                Tweet
            </button>

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img className='h-10 w-10 rounded-full lg:mr-2' src="https://avatars.githubusercontent.com/u/112409022?v=4" alt="user" />
                <div className="leading-5 hidden xl:inline">
                    <h4 className='font-bold ' >Tomer Benaim</h4>
                    <p className='text-gray-500 lg:mr-2'>@b-Tomer</p>
                </div>
                <EllipsisHorizontalCircleIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>

        </div>
    )
}

export default SideBar