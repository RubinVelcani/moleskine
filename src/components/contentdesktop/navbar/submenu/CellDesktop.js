import React, { useState } from 'react'
import Square from '../../../../icons/Square'

const CellDesktop = ({ nam }) => {

    const [actHover, setActHover] = useState(false)

    function toggle() {
        setActHover(!actHover)
    }

    return (
        <div onMouseEnter={toggle} onMouseLeave={toggle} className='flex flex-row items-center'>
            <div className={actHover ? '-left-3 relative visible' : '-left-3 relative invisible'}>
                <Square />
            </div>
            <p className='py-3 cursor-default'>{nam}</p>
        </div>
    )
}

export default CellDesktop