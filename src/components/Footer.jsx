import React from 'react'

const email = 'meowoffice@linmeow.tw';
const info = [
  { label: '辦公室地址', value: '喵星區，毛茸茸大道88號，喵喵大樓3樓' },
  { label: '電話', value: '(02) 888-5678 ' },
  {
    label: '電子郵件地址',
    value: (
      <a className='underline' href={`mailto:${email}`}>
        {email}
      </a>
    ),
  },
];

export default function Footer() {
  return (
    <footer className='bg-primary-200 mt-12 md:mt-[150px]'>
      <div className='container max-w-lg mx-auto p-4 md:p-9'>
        <h3 className='text-start'>聯絡資訊：</h3>
        <ul>
          {info.map(item => {
            return (
              <li key={item.label} className='list-disc list-inside'>
                {`${item.label}：`} {item.value}
              </li>
            )
          })}
        </ul>
        <p className='pt-4'>© 2023 [立委候選人姓名] 版權所有。</p>
      </div>
    </footer>
  )
}
