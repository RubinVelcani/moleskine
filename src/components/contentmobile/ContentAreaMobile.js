import React, {useRef} from 'react'

import NavBar from './navbar/NavBarMobile'
import Content from '../../Content'
import useOutsideClick from '../helpers/useOutsideClick'

const ContentArea = ({ showMenu, setShowMenu }) => {

    const ref = useRef()

    useOutsideClick(ref, () => {
        if(showMenu)
        setShowMenu()
    })

    return (
        <div>
            <div ref={ref} className={showMenu ? 'flex flex-row justify-end w-10/12 lm:w-1/2md font-medium right-0 fixed transition duration-500 ease-in-out transform translate-x-0' 
                                     : 'flex flex-row w-10/12 justify-end lm:w-1/2md font-medium right-0 fixed transition duration-1000 ease-in-out transform translate-x-full'}>
                <NavBar/>
            </div>
            <Content />
        </div>
    )
}

export default ContentArea