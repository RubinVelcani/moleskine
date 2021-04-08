import React from 'react'

const LastSubmenuItem = () => {
    return (
        <div className='flex flex-row justify-between items-center mx-auto lg:flex-col lg:w-1/4 lg:p-4'>
            <h2 className='text-2xl font-normal ml-8 pb-3 lg:hidden'>"Heroes"</h2>
            <div className='lg:hidden'>
                <img src='/images/heroesCD.jpg' alt='heroes-vinyl' />
            </div>
            <div className='hidden lg:block'>
                <img src='/images/heroesCDDesktop.jpg' alt='heroes-vinyl' />
            </div>
            <h2 className='text-2xl font-normal pb-3 hidden lg:block'>David Bowie - "Heroes"</h2>
            <p className='text-left text-lg hidden lg:block'>Celebrate one of the greatest artists of all time with one of his best records, "Heroes". The 2017 remaster brings forth the subleties that Toni Visconti, Brian Eno, David Bowie and Robert Fripp brought up in that cold studio in West Berlin, 1977.</p>
        </div>
    )
}

export default LastSubmenuItem