import React from 'react'

import CategoryMobile from './CategoryMobile'
import Data from '../../../data.json'

const NavBar = () => {

    return (
        <div className='flex flex-col w-full h-screen items-end bg-white border-black shadow-leftSide lg:flex-row lg:justify-around lg:pt-0 lg:py-2 lg:border-b-2'>
            {
                Data.map(category => {
                    return (<CategoryMobile submenu={category.submenu} title={category.title}/>)
                })
            }
        </div>
    )
}

export default NavBar