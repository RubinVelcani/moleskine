import React from 'react'

import SectionDesktop from './SectionDesktop'

const CategoryDesktop = ({ submenu, title, showSubMenu }) => {

    return (
        <div className={showSubMenu ? 'absolute border-t-4 border-black left-0 w-full' : 'absolute border-t-4 border-black left-0 w-full hidden'}>
            <SectionDesktop submenu={submenu} title={title}/>
        </div>
    )
}

export default CategoryDesktop