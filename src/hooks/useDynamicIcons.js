import { MdDashboard } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
const iconArray = {
    dashBoard:MdDashboard,
    clients:FaBuildingColumns,
    users:BsPeople,
    createNew:MdAddCircleOutline,
    close:FaWindowClose
     
}

const useDynamicIcons = ()=>{

    return function (iconname){
        return iconArray[iconname]
    }
}

export default useDynamicIcons