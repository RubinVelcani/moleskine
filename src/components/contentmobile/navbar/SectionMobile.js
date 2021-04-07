import React from 'react'

import UnitMobile from './UnitMobile'

const Section = ({ submenu, toggle }) => {


    return (

        <div className={toggle ? 'flex flex-col items-end border-t border-b' :'flex flex-col items-end border-t border-b hidden'}>
            {
                submenu.map((decade, i) => {
                    return (<UnitMobile key={i} decade={decade}/>)
                })
            }
        </div>
    )
}

export default Section