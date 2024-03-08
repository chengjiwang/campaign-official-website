import { useState } from "react";
import FiMenu from '@meronex/icons/fi/FiMenu';

import logoImg from "../assets/logo.png";

export default function Header() {
  const [selectedMenuId, setSelectedMenuId] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleItemClick = (itemId) => {
    setSelectedMenuId(itemId);
    setIsMenuVisible(false);
  };

  const menuItems = [
    {
      id: 0,
      name: "首頁",
      url: "#",
    },
    {
      id: 1,
      name: "最新消息",
      url: "#",
    },
    {
      id: 2,
      name: "政策議題",
      url: "#",
    },
    {
      id: 3,
      name: "小額捐款",
      url: "#",
    },
  ];

  return (
    <header className="text-black flex justify-between items-center xl:justify-center">
      <div className="flex items-center">
        <img src={logoImg} alt="Logo" className="w-24 xl:w-48" />
        <div className="flex flex-row text-sm font-bold xl:flex-col xl:text-5xl">
          <span className="-ml-6">喵立翰</span>
          <span className="xl:-ml-10 xl:mt-2">(Miao Li-Han)</span>
        </div>
      </div>

      <nav className="hidden ml-6 xl:block">
        <ul className="flex space-x-12 text-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-40 py-2 cursor-pointer border-x-4 border-primary-300 hover:bg-primary-300 ${selectedMenuId === item.id ? "bg-primary-300" : ""
                }`}
            >
              <a href={item.url} className="text-2xl px-4">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuVisible && (
        <MobileMenu menuItems={menuItems} selectedMenuId={selectedMenuId} handleItemClick={handleItemClick} />
      )}

      <div className="z-10 xl:hidden px-5 relative">
        <FiMenu className='w-full h-full' onClick={handleMenuClick} />
      </div>
    </header>
  );
}

const MobileMenu = ({ menuItems, selectedMenuId, handleItemClick }) => {
  return (
    <div className='z-10 absolute top-8 right-4 py-4 px-2 bg-primary-200'>
      <nav className="w-20 mt-5">
        <ul className="flex flex-col space-y-3 text-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`py-1 cursor-pointer border-x-4 border-primary-300 hover:bg-primary-300 ${selectedMenuId === item.id ? "bg-primary-300" : ""
                }`}
            >
              <a href={item.url} className="text-sm px-1">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
