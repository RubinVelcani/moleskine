import React from 'react'

const Unit = ({ decade }) => {

    return (
        <div className='w-10/12 mr-4 py-4 border-t transform -translate-y-px cursor-default'>
            <h3 className='font-bold py-4'>{decade.title}</h3>
            {
                decade.artists.map((nam, i) => {
                    return (<p key={i} className='py-3 my-1 cursor-pointer'>{nam}</p>)
                })
            }
        </div>
    )
}

export default Unit