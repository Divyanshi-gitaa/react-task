import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='site-wrapper'>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout