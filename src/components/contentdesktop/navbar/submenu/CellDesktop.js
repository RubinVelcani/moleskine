import React, { useState } from 'react'
import Square from '../../../../icons/Square'

const CellDesktop = ({ nam }) => {

    const [actHover, setActHover] = useState(false)

    function toggle() {
        setActHover(!actHover)
    }

    return (
        <div onMouseEnter={toggle} onMouseLeave={toggle} className='flex flex-row items-center justify-start'>
            <div className={actHover ? '-left-3 relative visible' : '-left-3 relative invisible'}>
                <Square />
            </div>
            <p className='cursor-pointer -left-2 py-2 pr-1 my-1'>{nam}</p>
        </div>
    )
}

export default CellDesktop