import { useSelector } from "react-redux";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import useNavigation from "../../hooks/useNavigation";
import { useEffect } from "react";

const MenuBar = () => {
    const menuList = useSelector((state) => state?.user?.user?.menuList);
    const getMyIconFor = useDynamicIcons();
    const navigate = useNavigation();
 
    const handleNavigation = (menuName) => {
        navigate(menuName);
    };

    return (
        <div className="w-full lg:h-[100%]   flex lg:flex-col  flex-row justify-center items-center h-20 rounded-md">
            {console.log({...menuList},Object.keys(menuList).filter((menu) =>{return  menuList[menu]}) )}
            {menuList && Object.keys(menuList)?.length
                ? Object.keys(menuList)
                      .filter((menu) => menuList[menu]?.access) // Filter menus with access
                      .map((menu) => {
                        
                          const IconComponent = getMyIconFor(menu);
                          return (
                              <div
                                  key={menu}
                                  onClick={() => handleNavigation(menuList[menu]?.link)}
                                  className="cursor-pointer shadow-sm hover:bg-opacity-80 w-24 h-24 m-1 flex flex-col justify-center items-center uppercase text-sm rounded-full bg-white bg-opacity-30"
                              >
                                  {IconComponent && (
                                      <IconComponent className="w-6 h-6 mr-2 text-violet-700" />
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
