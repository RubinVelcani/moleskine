import React from 'react'

import SectionDesktop from './SectionDesktop'

const CategoryDesktop = ({ submenu, title, showSubMenu }) => {

    return (
        <div className={showSubMenu ? 'absolute left-0 w-full bg-white' : 'absolute left-0 w-full bg-white hidden'}>
            <SectionDesktop submenu={submenu} title={title}/>
        </div>
    )
}

export default CategoryDesktop