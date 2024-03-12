import React from 'react'

const Input = ({ label, placeholder, elementId }) => {
  return (
    <div className="mb-6">
      <label htmlFor={elementId} className='text-xl block mb-2'>{label}</label>
      <input type="text" id={elementId} placeholder={placeholder} className='w-full md:w-1/2 border-4 rounded-lg border-secondary-100 h-9 pl-4' />
    </div>
  )
}

export default function Contact() {
  return (
    <section className='container max-w-screen-lg mx-auto pt-10 md:pt-12'>
      <h2 className='font-bold text-center text-xl md:text-6xl'>民眾服務信箱</h2>
      <h3 className='font-bold text-center text-xl py-4 md:text-4xl md:py-6'>您的聲音，我們的行動！</h3>
      <p className='text-sm px-10 md:text-3xl'>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！ </p>

      <form className="pt-8 px-10 flex flex-col">
        <Input
          label='您的姓名'
          placeholder='請輸入姓名'
          elementId='name'
        />
        <Input
          label='您的email'
          placeholder='請輸入email'
          elementId='email'
        />
        <Input
          label='您的手機'
          placeholder='請輸入手機號碼'
          elementId='phone'
        />
        <div className="mb-6">
          <label htmlFor='suggest' className='text-xl block mb-2'>您的建言</label>
          <textarea id='suggest'className='w-full h-[200px] md:w-1/2 border-4 rounded-lg border-secondary-100 h-9 pl-4' />
        </div>

        <div className='text-left'>
          <button className='font-bold text-xl rounded-lg bg-primary-300 p-2 w-[130px] md:w-[200px] md:text-4xl md:p-4'>送出</button>
        </div>      
      </form>
    </section>
  )
}
