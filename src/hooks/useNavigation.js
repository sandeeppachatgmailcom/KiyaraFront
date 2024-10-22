import { useNavigate } from "react-router-dom"

const useNavigation = () => {
    const navigate = useNavigate()
    function myNavigate(path) {
        navigate( path)
    }
    return myNavigate
}

export default useNavigation