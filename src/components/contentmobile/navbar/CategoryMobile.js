import React, { useState, useRef } from 'react'

import SectionMobile from './SectionMobile'
import UseOutsideClick from '../../helpers/UseOutsideClick'

import ArrowLeft from '../../../icons/ArrowLeft'

const Category = ({ title, submenu }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const ref = useRef()

    function toggle() {
        setShowSubMenu(!showSubMenu)
    }

    UseOutsideClick(ref, () => {
        setShowSubMenu(false)
    })

    return (
        <div ref={ref} className='w-full text-right transition cursor-pointer'>
            <div onClick={toggle} className='flex flex-row items-center justify-between pl-8'>
                <div className={showSubMenu ? '' : 'invisible'}>
                    <ArrowLeft />
                </div>
                <h1 className='pr-4 uppercase text-xl py-6 self-center font-medium tracking-wider'>{title}</h1>
            </div>
            <SectionMobile submenu={submenu} toggle={showSubMenu} />
        </div>
    )
}

export default Category