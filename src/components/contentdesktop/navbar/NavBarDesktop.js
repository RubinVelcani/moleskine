import React from 'react'

import NavbarItem from './NavbarItemDesktop'
import Data from '../../../data.json'

const NavBar = () => {

    return (
        <div className='flex flex-row w-full text-center border-b-4 border-black items-center'>
                {Data.map(category => {
                    return (<NavbarItem submenu={category.submenu} title={category.title} />)
                })}
        </div>
    )
}

export default NavBar