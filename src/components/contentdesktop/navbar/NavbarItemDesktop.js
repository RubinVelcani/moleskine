import React, { useState, useRef } from 'react'
import CategoryDesktop from './submenu/CategoryDesktop'
import useOutsideClick from '../../helpers/useOutsideClick'
import style from './NavBarItem.module.css'

const NavbarItemDesktop = ({ submenu, title }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const [liftBorder, setLiftBorder] = useState(false)

    const ref = useRef()

    function toggle() {
        setShowSubMenu(!showSubMenu)
    }

    function toggleLift() {
        setLiftBorder(!liftBorder)
    }

    function onClickBorderBehaviour(showSubMenu){
        showSubMenu ? (toggleLift = null) : toggleLift
        }

    useOutsideClick(ref, () => setShowSubMenu(false))

    return (
        <div ref={ref} className='flex flex-col items-center w-full'>
            <h1 onMouseEnter={toggleLift} onMouseLeave={toggleLift} onClick={toggle, onClickBorderBehaviour}
                className={style.category}>{title}</h1>
            <div className='block'>
                <CategoryDesktop submenu={submenu} title={title} showSubMenu={showSubMenu} />
            </div>
        </div>
    )
}

export default NavbarItemDesktop

