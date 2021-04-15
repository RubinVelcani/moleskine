import React from 'react'

const Hamburger = ({show}) => {
    return (
        
        <div className={show ? 'hidden' : 'p-2.5 mr-2.5'}>
            <svg viewBox="0 0 100 80" width="19" height="19">
                <rect width="100" height="8" rx="10"></rect>
                <rect y="35" width="100" height="8" rx="10"></rect>
                <rect y="70" width="100" height="8" rx="10"></rect>
            </svg>
        </div>
    )
}

export default Hamburger