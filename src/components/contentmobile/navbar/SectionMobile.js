import React from 'react'

import UnitMobile from './UnitMobile'
import style from './SectionMobile.module.css'

const Section = ({ submenu, title, toggle, checkSubmenu }) => {
    
    return (
        <div className={title === checkSubmenu ? 'block' : 'hidden'}>
            <div className={toggle ? style.sectionClicked : style.section}>{
                submenu.map((decade, i) => {
                    return (<UnitMobile key={i} decade={decade} />)
                })
            }
            </div>
        </div>
    )
}

export default Section