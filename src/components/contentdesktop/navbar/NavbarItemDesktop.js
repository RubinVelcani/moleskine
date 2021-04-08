import React, { useState, useRef } from 'react'
import CategoryDesktop from './submenu/CategoryDesktop'
import useOutsideClick from '../../helpers/useOutsideClick'
import style from './NavBarItem.module.css'

const NavbarItemDesktop = ({ submenu, title }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const [liftPut, setLiftPut] = useState(false)

    const [hoverCheck, setHoverCheck] = useState(false)

    const ref = useRef()

    function toggleHoverCheck() {
        setHoverCheck(!hoverCheck)
    }

    function toggle() {
        setShowSubMenu(!showSubMenu)
        setLiftPut(!liftPut)
    }

    useOutsideClick(ref, () => {
        setLiftPut(false)
        setShowSubMenu(false)
    })

    return (
        <div ref={ref} className='flex flex-col items-center w-full cursor-default'>
            <h1 onClick={toggle} onMouseEnter={toggleHoverCheck} className={liftPut ? style.categoryClicked : style.category}>{title}</h1>
            <div className='w-full border-b-4 border-black shadow-bottomSide'></div>
            <div className='block'>
                <CategoryDesktop submenu={submenu} title={title} showSubMenu={showSubMenu} />
            </div>
        </div>
    )
}

export default NavbarItemDesktop

