
import ArrowBtn from '@/components/ui/arrow-btn'
import Link from 'next/link'
import React from 'react'



const NotFoundPage = () => {
  return (
    <div className='container grid xl:grid-cols-3 px-5 items-center place-content-center mx-auto h-screen overflow-hidden  '>



      <svg stroke="currentColor" className='hidden xl:block size-full scale-110' fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M184,160H168V48a8,8,0,0,0-14.25-5l-96,120A8,8,0,0,0,64,176h88v32a8,8,0,0,0,16,0V176h16a8,8,0,0,0,0-16Zm-32,0H80.64L152,70.81Z"></path></svg>
      <div className='w-fit xl:w-full relative max-w-[500px]  px-5 pb-7 pt-16 h-fit text-center rounded-lg bg-foreground text-background grid place-content-center'>
        <h4 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-semibold">... 404 error ... <br /> Sorry Page, Not found</h4>
        
        <p className='text-lg sm:text-xl font-semibold mx-auto max-w-[400px] '>This is a demo project. Feel free to visit the GitHub repository and complete it!</p>
        <Link href="https://github.com/your-repo-link" className="px-7 py-5 font-medium mt-14 mx-auto  w-[90%] flex items-start justify-between  text-lg bg-yellow rounded-lg text-background">
        <span>Go to GitHub</span>
        <ArrowBtn className='bg-black'/>
        </Link>
        <Link href="/" className="px-7 py-5 font-medium mt-5 mx-auto  w-[90%] flex items-start justify-between  text-lg bg-yellow rounded-lg text-background">
        <span>Back to home</span>
        <ArrowBtn className='bg-black'/>
        </Link>
        <Link href="/" className='absolute -bottom-14 text-foreground  left-0 w-full flex justify-center items-center gap-2'>
          <div className='size-9 bg-yellow text-background font-bold text-xl  rounded-lg flex items-center justify-center'>
            <span className='block -mr-0.5'>F</span>
            <span className='block -ml-0.5'>F</span>
          </div>
          <h4 className='text-lg'>Fine Flex</h4>
        </Link>
      </div>

      <svg stroke="currentColor" className='hidden xl:block  size-full' fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M184,160H168V48a8,8,0,0,0-14.25-5l-96,120A8,8,0,0,0,64,176h88v32a8,8,0,0,0,16,0V176h16a8,8,0,0,0,0-16Zm-32,0H80.64L152,70.81Z"></path></svg>

    </div>

  )
}
export default NotFoundPage