import React from 'react'
import bannerDesktopImg from "../assets/banner_desktop.png";
import bannerMobileImg from "../assets/banner_mobile.png";

export default function Banner() {
  return (
    <div className='relative flex justify-center'>
      <img src={bannerMobileImg} className='w-full opacity-50 xl:hidden' />
      <img src={bannerDesktopImg} className='hidden opacity-50 xl:block' />

      <div className='absolute font-bold text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-sm xl:text-5xl'>喵立翰（Miao Li-Han）</h2>
        <p className='text-xl mt-2 xl:text-6xl xl:mt-8'>台灣的明天，喵先鋪路</p>
      </div>
    </div>
  )
}
