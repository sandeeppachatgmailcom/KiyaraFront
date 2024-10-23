import axios from "axios";
import { useEffect, useState } from "react"

const useCheckPanValid = ()=>{
 
const [panList,setPanList] = useState({}) 

async function checkPanValid (panNumber){
    try {
        if(panList[panNumber]) return true
        else 
        {
            const result =await axios.post('https://mvp.verify24x7.in/verifyApi/api/validate-pan',{pan:panNumber})
            if(result?.data?.result){
                setPanList({...panList,
                   [panNumber]:true 
                })
                return true
            }
            else return false
        }
        
    } catch (error) {
    }
}
    return checkPanValid
}

export default useCheckPanValid