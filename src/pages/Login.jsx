import LoginBox from "../components/login/loginBox"

const Login = ()=>{
    return(
        <div className="w-full   h-[100%] justify-center relative flex items-center">
        <div className="  w-[70%] h-[70%] flex justify-center items-center   xl:w-3/12 lg:end-12   rounded-md  ">
            <LoginBox/>
        </div>
    </div>
    )
}

export default Login