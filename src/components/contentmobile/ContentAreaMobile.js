import React from 'react'

import NavBar from './navbar/NavBarMobile'
import Content from '../../Content'

const ContentArea = ({ showMenu }) => {

    return (
        <div>
            <div className={showMenu ? 'flex flex-row justify-end w-85 sm:w-1/2md font-medium right-0 fixed transition duration-500 ease-in-out transform translate-x-0' : 'flex flex-row w-85 justify-end lm:w-1/2md font-medium right-0 fixed transition duration-1000 ease-in-out transform translate-x-full'}>
                <NavBar/>
            </div>
            <Content />
        </div>
    )
}

export default ContentArea