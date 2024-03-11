import { useState } from "react";
import { Link, Element } from 'react-scroll';
import FiMenu from '@meronex/icons/fi/FiMenu';

import logoImg from "../assets/logo.svg";

const menuItems = [
  {
    id: 0,
    name: "首頁",
    url: "index",
  },
  {
    id: 1,
    name: "最新活動",
    url: "campaign",
  },
  {
    id: 2,
    name: "政策議題",
    url: "policy",
  },
  {
    id: 3,
    name: "小額捐款",
    url: "donate'",
  },
];

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="text-black bg-primary-100 shadow-md shadow-primary-300 fixed z-10 w-full h-20 xl:h-40 flex justify-between items-center xl:justify-center">
      <div className="flex items-center">
        <img src={logoImg} alt="Logo" className="w-24 h-20 xl:h-40 xl:w-48" />
        <div className="flex flex-row text-sm font-bold xl:flex-col xl:text-5xl">
          <span className="-ml-6">喵立翰</span>
          <span className="xl:-ml-10 xl:mt-2">(Miao Li-Han)</span>
        </div>
      </div>

      <nav className="hidden ml-6 xl:block">
        <ul className="flex space-x-12 text-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="block w-40 py-2 cursor-pointer border-x-4 border-primary-300 hover:bg-primary-300 text-2xl"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuVisible && (
        <MobileMenu menuItems={menuItems} handleMenuVisible={handleMenuVisible} />
      )}

      <div className="z-10 xl:hidden px-5 relative">
        <FiMenu className='w-full h-full' onClick={handleMenuVisible} />
      </div>
    </header>
  );
}

const MobileMenu = ({ menuItems, handleMenuVisible }) => {
  return (
    <div className='z-10 absolute top-8 right-4 py-4 px-2 bg-primary-200'>
      <nav className="w-20 mt-5">
        <ul className="flex flex-col space-y-3 text-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => handleMenuVisible()}
                className="block py-1 cursor-pointer border-x-4 border-primary-300 hover:bg-primary-300 text-sm"
              >
                {item.name}
              </Link>              
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
