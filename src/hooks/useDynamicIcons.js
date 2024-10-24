import { MdDashboard } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
const iconArray = {
    dashBoard:MdDashboard,
    clients:FaBuildingColumns,
    users:BsPeople,
    createNew:MdAddCircleOutline,
    close:FaWindowClose,
    verified:MdOutlineVerified,
    edit:FaEdit,
    delete:RiDeleteBin5Line,
    block: FaRegStopCircle,
    resume:FaRegCirclePlay,
    view:FaEye,
    logOut:FaPowerOff,
    home:IoHome
}

const useDynamicIcons = ()=>{

    return function (iconname){
        return iconArray[iconname]
    }
}

export default useDynamicIcons