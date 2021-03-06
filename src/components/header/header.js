import React from 'react'
import CompanyLogoMobile from '../../icons/CompanyLogoMobile'
import CompanyLogoDesktop from '../../icons/CompanyLogoDesktop'
import Person from '../../icons/Person'
import MagnifyingGlass from '../../icons/MagnifyingGlass'
import ShoppingBag from '../../icons/ShoppingBag'
import Ex from '../../icons/Ex'
import Hamburger from '../../icons/Hamburger'

const Header = ({ showMenu, setShowMenu }) => {

    return (
        <header className='font-main border-b-4 border-black lg:border-b-2 lg:border-gray-300'>
            <div className='flex flex-row justify-between items-center'>
                <div className='p-3.5 mx-2.5 cursor-pointer hidden lg:block'>
                    <CompanyLogoDesktop />
                </div>
                <div className='px-2.5 mx-2.5 cursor-pointer lg:hidden'>
                    <CompanyLogoMobile />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='hidden font-medium tracking-wide text-xs lg:flex lg:border-r-2 lg:pl-5 pr-6 mr-5'>
                        <p className='cursor-pointer p-2 mr-6'>Stores</p>
                        <p className='cursor-pointer p-2'>Support</p>
                    </div>
                    <Person />
                    <MagnifyingGlass />
                    <ShoppingBag />
                    <div className='block lg:hidden'>
                        <div className='cursor-pointer' onClick={setShowMenu}>
                            <Hamburger show={showMenu} />
                        </div>
                        <div className='cursor-pointer' onClick={setShowMenu}>
                            <Ex show={showMenu} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header