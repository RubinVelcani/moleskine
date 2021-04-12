import React from 'react'

import UnitMobile from './UnitMobile'
import style from './SectionMobile.module.css'
import LastSubmenuItem from '../../contentdesktop/navbar/submenu/LastSubmenuItem'

const Section = ({ submenu, toggle }) => {

    return (

        <div className={toggle ? style.postClick : style.preClick}>
            {
                submenu.map((decade, i) => {
                    return (<UnitMobile key={i} decade={decade}/>)
                })
            }
            <LastSubmenuItem/>
        </div>
    )
}

export default Section