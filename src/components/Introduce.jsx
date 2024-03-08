import React from 'react'
import IntroduceDesktopImg from "../assets/introduce_desktop.png";
import IntroduceMobileImg from "../assets/introduce_mobile.png";

export default function Introduce() {
  return (
    <div className='container max-w-screen-lg mx-auto mt-10 lg:mt-16'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full'>
          <img src={IntroduceMobileImg} className='mx-auto lg:hidden' />
          <img src={IntroduceDesktopImg} className='mx-auto hidden lg:block' />
        </div>

        <div className='py-3 px-16 lg:py-16 lg:px-4'>
          <h2 className='font-bold text-2xl mb-4 lg:text-4xl xl:text-5xl lg:mb-8'>喵立翰（Miao Li-Han）</h2>
          <p className='text-sm mb-2 xl:text-base'>
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
          </p>
          <p className='text-sm xl:text-base'>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
      </div>
    </div>
  )
}
