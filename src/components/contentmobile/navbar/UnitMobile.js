import React from 'react'

const Unit = ({ decade }) => {

    return (
        <div className='leading-3 w-10/12 mr-4 py-2 border-b'>
            <h3 className='font-bold'>{decade.title}</h3>
            {
                decade.artists.map(nam => {
                    return (<p className=''>{nam}</p>)
                })
            }
        </div>
    )
}

export default Unit