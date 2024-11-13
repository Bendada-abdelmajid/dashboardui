import Header from '@/components/header'

import React from 'react'


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
  return (
    <main className='px-5 lg:px-10 pb-5 '>
   
         <Header />
         {children}
         
      
        
    </main>
  )
}

export default layout