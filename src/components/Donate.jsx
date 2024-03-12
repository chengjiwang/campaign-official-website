import React from 'react'
import donate1Img from "../assets/donate1.jpeg";
import donate2Img from "../assets/donate2.jpeg";
import donate3Img from "../assets/donate3.jpeg";

const donateItem = [
  { id: 1, title: '「喵星人之友」', amount: 600, sponsors: 9957, image: donate1Img },
  { id: 2, title: '「喵星大使」', amount: 500, sponsors: 8600, image: donate2Img },
  { id: 3, title: '「喵星傳奇」', amount: 550, sponsors: 9207, image: donate3Img },
]

export default function Donate() {
  return (
    <section id='donate' className='container max-w-screen-lg mx-auto px-8 py-6 font-bold md:py-16'>
      <div>
        <h2 className='mb-2 text-center text-xl md:mb-8 md:text-6xl'>小額捐款</h2>
        <h3 className='mb-1 text-xl md:text-3xl md:text-center md:mb-6'>您的小筆捐款，是每隻毛孩未來的大大動力！</h3>
        <p className='text-xl md:text-3xl md:text-center'>目前小額贊助總金額：987,655,873</p>
      </div>

      <div className='flex flex-col md:flex-row'>
        {donateItem.map(item => {
          return (
            <div key={item.id} className='pt-6 px-4 text-center text-xl md:pt-16 md:px-8 lg:text-3xl'>
              <img src={item.image} alt={item.image} className='w-full rounded-lg' />
              <h4 className='py-4'>{item.title}</h4>
              <p>捐款新台幣 {item.amount} 元</p>
              <p className='py-4'>已有 {item.sponsors} 人贊助</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
