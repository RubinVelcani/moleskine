import React from 'react'

const LastSubmenuItem = () => {
    return (
        <div className='flex flex-row w-full border-t justify-between text-left items-center lg:flex-col lg:items-start lg:w-60 lg:pl-7 lg:pb-10 lg:ml-auto lg:border-t-0'>
            <h2 className='text-lg font-normal ml-8 lg:hidden'>David Bowie</h2>
            <div className='lg:hidden'>
                <img src='/images/heroesCDMobile.jpg' alt='heroes-vinyl' />
            </div>
            <div className='hidden lg:block'>
                <img src='/images/heroesCDDesktop.jpg' alt='heroes-vinyl' />
            </div>
            <h2 className='text-lg font-normal hidden lg:block lg:mt-3 lg:pt-2 lg:text-left'>David Bowie</h2>
            <p className='hidden lg:block lg:mt-2 lg:pt-1'>Celebrate one of the greatest artists of all time with one of his best records, "Heroes", the 2017 remaster.</p>
        </div>
    )
}

export default LastSubmenuItem