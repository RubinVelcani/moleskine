import React from 'react'

const Content = () => {
    return (
        <div className='p-8 bg-white'>
            We destructure the open and setOpen props and pass them to our StyledBurger to add styles for each prop, respectively. Also, we add the onClick handler to call our setOpen function and toggle open prop. At the end of the file, we add type checking, which is considered a best practice for aligning arguments with expected data.
            You can check whether it works or not by going to your react-dev-tools. Go to Components tab in your Chrome DevTools and click on Burger tab.
        </div>
    )
}

export default Content