import React from 'react'
import LastSubmenuItem from './LastSubmenuItem'

import UnitDesktop from './UnitDesktop'

const SectionColumn = ({ submenu }) => {

    return (
        <div className={'flex flex-row w-full pr-4 pt-6 bg-white'}>
            {
                submenu.map((decade, i) => {
                    return (<UnitDesktop key={i} decade={decade}/>)
                })
            }
            <LastSubmenuItem/>
        </div>
    )
}

export default SectionColumn