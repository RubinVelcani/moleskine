import React from 'react'

const Unit = ({ decade }) => {

    return (
        <div className='w-10/12 mr-4 py-2 border-b'>
            <h3 className='font-bold py-4'>{decade.title}</h3>
            {
                decade.artists.map(nam => {
                    return (<p className='py-4'>{nam}</p>)
                })
            }
        </div>
    )
}

export default Unit