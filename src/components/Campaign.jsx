import campaign1DesktopImg from "../assets/campaign1_desktop.png";
import campaign1MobileImg from "../assets/campaign1_mobile.png";
import campaign2DesktopImg from "../assets/campaign2_desktop.png";
import campaign2MobileImg from "../assets/campaign2_mobile.png";
import campaign3DesktopImg from "../assets/campaign3_desktop.png";
import campaign3MobileImg from "../assets/campaign3_mobile.png";

const campaigns = [
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    desktopImg: campaign1DesktopImg,
    mobileImg: campaign1MobileImg,
    date: '12/26',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
  },
  {
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    desktopImg: campaign2DesktopImg,
    mobileImg: campaign2MobileImg,
    date: '12/24',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。'
  },
  {
    title: '收容所模特兒大比拼！前所未有的「模特兒走秀」！',
    desktopImg: campaign3DesktopImg,
    mobileImg: campaign3MobileImg,
    date: '12/20',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
  },
]

export default function Campaign() {
  return (
    <div id='campaign' className='container max-w-screen-xl mx-auto mt-7 xl:mt-32'>
      <h2 className='font-bold text-center text-xl md:text-4xl'>最新活動</h2>
      <div className='flex flex-wrap'>
        {campaigns.map(item => {
          return (
            <div className='px-20 py-3 md:px-4 md:p-4 md:w-1/3'>
              <h3 className='mt-5 font-bold text-lg lg:text-2xl'>{item.title}</h3>           
              <img src={item.mobileImg} srcSet={`${item.desktopImg} 1024w, ${item.mobileImg} 512w`} alt="Campaign" className='my-3' />
              <p className='font-bold text-lg text-center lg:text-2xl'>{item.date}</p>
              <p className='mt-2'>
                {item.content}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
