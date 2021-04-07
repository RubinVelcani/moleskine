import React from 'react'

import NavBarDesktop from './navbar/NavBarDesktop'
import Content from '../../Content'

const ContentArea = () => {

    return (
        <div className='flex flex-col'>
            <NavBarDesktop/>
            <Content />
        </div>
    )
}

export default ContentArea