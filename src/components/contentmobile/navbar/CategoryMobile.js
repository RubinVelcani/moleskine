import React, { useState, useRef } from 'react'

import SectionMobile from './SectionMobile'
import LastSubmenuItem from '../../contentdesktop/navbar/submenu/LastSubmenuItem'
import useOutsideClick from '../../helpers/useOutsideClick'

import ArrowLeft from '../../../icons/ArrowLeft'

const Category = ({ title, submenu }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const ref = useRef()

    function toggle() {
        setShowSubMenu(!showSubMenu)
    }

    useOutsideClick(ref, () => {
        setShowSubMenu(false)
    })

    return (
        <div ref={ref} className='w-full text-right transition cursor-default'>
            <div className='flex flex-row items-center justify-between pl-8'>
                <div className={showSubMenu ? '' : 'invisible'}>
                    <ArrowLeft />
                </div>
                <h1 onClick={toggle} className='pr-4 uppercase text-xl py-6 self-center font-medium tracking-wider'>{title}</h1>
            </div>
            <SectionMobile submenu={submenu} toggle={showSubMenu} />
            {showSubMenu ?
                <LastSubmenuItem/>
                : (null)
            }
        </div>
    )
}

export default Category