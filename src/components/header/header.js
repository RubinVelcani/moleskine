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
        <header className='font-main py-3 border-b-4 border-black lg:border-b-2 lg:border-gray-300'>
            <div className='flex flex-row justify-between items-center mx-5'>
                <div className='hidden lg:block'>
                    <CompanyLogoDesktop />
                </div>
                <div className='block lg:hidden'>
                    <CompanyLogoMobile />
                </div>
                <div className='flex flex-row justify-between pl-7 items-center'>
                    <div className='hidden font-medium lg:flex lg:border-r-2 lg:pl-5 pr-6'>
                        <p className='pr-5 cursor-default'>Stores</p>
                        <p className='cursor-default'>Support</p>
                    </div>
                    <Person />
                    <MagnifyingGlass />
                    <ShoppingBag />
                    <div className='block lg:hidden'>
                        <div onClick={setShowMenu}>
                            <Hamburger show={showMenu} />
                        </div>
                        <div onClick={setShowMenu}>
                            <Ex show={showMenu} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header