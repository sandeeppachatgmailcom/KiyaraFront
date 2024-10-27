import { useSelector } from "react-redux";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import useNavigation from "../../hooks/useNavigation";
import { useEffect, useState } from "react";

const MenuBar = () => {
    const menuList = useSelector((state) => state?.user?.user?.menuList);
    const getMyIconFor = useDynamicIcons();
    const navigate = useNavigation();
    const [selectedmenu,setSelectedMenu] = useState('home')
    const handleNavigation = (menuName) => {
        navigate(menuName);
    };

    return (
        <div className="w-full lg:h-[100%]   flex lg:flex-col  flex-row justify-center items-center h-20 rounded-md">
            
            {menuList && Object.keys(menuList)?.length
                ? Object.keys(menuList)
                      .filter((menu) => menuList[menu]?.access) // Filter menus with access
                      .map((menu) => {
                        
                          const IconComponent = getMyIconFor(menu);
                          return (
                              <div
                                  key={menu}
                                  onClick={() =>{ handleNavigation(menuList[menu]?.link);setSelectedMenu(menu)}}
                                  className={`${menu==selectedmenu ?'text-cyan-900  bg-opacity-50':'text-white'}  from-sky-700  to-sky-800      cursor-pointer shadow-sm hover:text-cyan-900  hover:bg-opacity-70 w-24 h-24 m-1 flex flex-col justify-center items-center uppercase text-sm rounded-full bg-white bg-opacity-5`}
                              >
                                  {IconComponent && (
                                      <IconComponent className={`${menu==selectedmenu ?'  text-cyan-900':'text-white  '} w-6 h-6 mr-2  `} />
                                  )}
                                  {menu}
                              </div>
                          );
                      })
                : ""}
        </div>
    );
};

export default MenuBar;
