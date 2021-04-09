import React from 'react'

import CategoryMobile from './CategoryMobile'
import Data from '../../../data.json'

const NavBar = () => {

    function checkSubmenu (check, checkSecond) {
        check ===  checkSecond ? true : false        
    }

    return (
        <div className='flex flex-col w-full h-screen items-end bg-white border-black overflow-y-auto shadow-leftSide'>
            {
                Data.map((category, i) => {
                    return (<CategoryMobile key={i} submenu={category.submenu} title={category.title} checkSubmenu={checkSubmenu}/>)
                })
            }
        </div>
    )
}

export default NavBar