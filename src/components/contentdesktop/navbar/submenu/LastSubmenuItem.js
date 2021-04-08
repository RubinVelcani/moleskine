import React from 'react'

const LastSubmenuItem = () => {
    return (
        <div className='flex flex-col w-1/4 p-4 mx-auto'>
            <div className='lg:hidden'>
                <img src='/images/heroesCD.jpg' alt='heroes-vinyl' />
            </div>
            <div className='hidden lg:block'>
                <img src='/images/heroesCDDesktop.jpg' alt='heroes-vinyl' />
            </div>
            <h2 className='text-xl font-semibold pb-3'>David Bowie - "Heroes"</h2>
            <p className='text-left'>Celebrate one of the greatest artists of all time with one of his best records, "Heroes". The 2017 remaster brings forth the subleties that Toni Visconti, Brian Eno, David Bowie and Robert Fripp brought up in that cold studio in West Berlin, 1977.</p>
        </div>
    )
}

export default LastSubmenuItem