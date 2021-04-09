import React, { useState } from 'react'
import './App.css'

import Header from './components/header/header'
import ContentAreaMobile from './components/contentmobile/ContentAreaMobile'
import ContentAreaDesktop from './components/contentdesktop/ContentAreaDesktop'

function App() {

  const [showMenu, setShowMenu] = useState(false)

  function toggle() {
    setShowMenu(!showMenu)
  }

  return (
    <div className=''>
      <Header showMenu={showMenu} setShowMenu={toggle} />
      <div className='lg:hidden'>
        <ContentAreaMobile showMenu={showMenu} toggle={toggle} />
      </div>
      <div className='hidden lg:block'>
        <ContentAreaDesktop/>
      </div>
    </div>
  )
}

export default App
