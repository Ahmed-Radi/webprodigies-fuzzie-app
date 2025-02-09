import InfoBar from '@/components/infoBar'
import MenuOptions from '@/components/sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className='flex overflow-hidden h-screen'>
      <MenuOptions />
      <div className='w-full'>
        <InfoBar />
        {children}
      </div>
    </div>
  )
}

export default Layout