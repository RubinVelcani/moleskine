import React from 'react'

import NavbarItem from './NavbarItemDesktop'
import Data from '../../../data.json'

const NavBar = () => {

    return (
        <div className='flex flex-row'>
            <div className='flex flex-row text-center items-center min-w-lg'>
                {Data.map((category, i) => {
                    return (<NavbarItem key={i} submenu={category.submenu} title={category.title} />)
                })}
            </div>
            <div className='w-full border-b-4 border-black self-end left-inherit right-0'></div>
        </div>
    )
}

export default NavBar