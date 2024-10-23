import { useSelector } from "react-redux";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import useNavigation from "../../hooks/useNavigation";

const MenuBar = () => {
    const menuList = useSelector((state) => state.user.user.menuList);
    const getMyIconFor = useDynamicIcons();
    const navigate = useNavigation()
    const handleNavigation = (menuName)=>{
        console.log(menuName,'menuNamemenuName')
        navigate(menuName)
    }
    return (
        <div className="w-full h-[80%] flex flex-col justify-start items-start  rounded-md">
            {Object.keys(menuList)?.length
                ? Object.keys(menuList)?.map((menu) => {
                      const IconComponent = getMyIconFor(menu); // Get the icon component dynamically

                      return (
                          <div
                              key={menu} onClick={()=>handleNavigation(menuList[menu]?.link)}
                              className="cursor-pointer shadow-sm  hover:bg-opacity-80  w-24 h-24 m-1 flex flex-col justify-center items-center uppercase text-sm rounded-full bg-white bg-opacity-30"
                          >
                              {/* Render the icon */}
                              {IconComponent && <IconComponent   className="w-6 h-6 mr-2 text-violet-700 " />}
                              {menu}
                          </div>
                      );
                  })
                : ""}
        </div>
    );
};

export default MenuBar;
