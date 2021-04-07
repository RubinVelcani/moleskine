import React, { useState } from 'react'

import SectionMobile from './SectionMobile'

import ArrowLeft from '../../../icons/ArrowLeft'

const Category = ({ title, submenu }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    function toggle() {
        setShowSubMenu(!showSubMenu)
    }

    return (
        <div className='w-full text-right transition cursor-default'>
            <div className='flex flex-row items-center justify-between pl-8'>
                <div className={showSubMenu ? '' : 'invisible'}>
                    <ArrowLeft />
                </div>
                <h1 onClick={toggle} className='pr-4 uppercase text-categoryHeader font-medium tracking-wider'>{title}</h1>
            </div>
            <SectionMobile submenu={submenu} toggle={showSubMenu} />
            {showSubMenu ?
                <div className='flex flex-row items-center justify-between pl-12'>
                    <h3>David Bowie</h3>
                    <img src='/images/heroesCDMobile.jpg' alt='heroes-vinyl'/>
                </div>
                : (null)
            }
        </div>
    )
}

export default Category