import React from 'react'

const Unit = ({ decade }) => {

    return (
        <div className='mr-4 py-2 border-b'>
            <h3 className='font-bold py-4'>{decade.title}</h3>
            {
                decade.artists.map((nam, i) => {
                    return (<p key={i} className='py-4'>{nam}</p>)
                })
            }
        </div>
    )
}

export default Unit