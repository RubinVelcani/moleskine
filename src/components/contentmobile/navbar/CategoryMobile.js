import React, { useState, useRef } from 'react'

import SectionMobile from './SectionMobile'
import LastSubmenuItem from '../../contentdesktop/navbar/submenu/LastSubmenuItem'
import useOutsideClick from '../../helpers/useOutsideClick'

import ArrowLeft from '../../../icons/ArrowLeft'

const Category = ({ title, submenu, checkSubmenu }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)
    const [subMenuCheck, setSubMenuCheck] = useState(false)

    const ref = useRef()
    let titleSecond

    function toggle() {
        setShowSubMenu(!showSubMenu)
    }

    useOutsideClick(ref, () => {
        setShowSubMenu(false)
    })

    function onClick() {
        toggle()
        setSubMenuCheck(!subMenuCheck)
        checkSubmenu(title)
        titleSecond = title
    }

    return (
        <div ref={ref} className='w-full text-right transition cursor-default'>
            <div onClick={onClick} className={showSubMenu ? 'flex flex-row items-center justify-between pl-8 border-b' : 'flex flex-row items-center justify-between pl-8'}>
                <div className={showSubMenu ? '' : 'invisible'}>
                    <ArrowLeft />
                </div>
                <h1 className='pr-4 uppercase text-xl py-6 self-center font-medium tracking-wider'>{title}</h1>
            </div>
            <div className={checkSubmenu(title, titleSecond) ? 'block' : 'hidden'}>
                <SectionMobile submenu={submenu} toggle={showSubMenu} title={title} checkSubmenu={checkSubmenu} />
                {showSubMenu ?
                    <LastSubmenuItem />
                    : (null)
                }
            </div>
        </div>
    )
}

export default Category