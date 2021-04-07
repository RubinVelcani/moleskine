import React from 'react'

import CellDesktop from './CellDesktop'

const Unit = ({ decade }) => {

    return (
        <div className='w-1/5 ml-7 border-r-2'>
            <h3 className='text-left font-bold pb-2'>{decade.title}</h3>
            {
                decade.artists.map(nam => {
                    return (
                        <CellDesktop nam={nam}/>
                    )
                })
            }
        </div>
    )
}

export default Unit