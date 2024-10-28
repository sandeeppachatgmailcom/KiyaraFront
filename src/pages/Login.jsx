import LoginBox from "../components/login/loginBox"

const Login = () => {
    return (
        <div className="w-full   h-[100%] justify-center relative flex items-center">
            <div className="  w-[70%] h-[70%] flex justify-center items-center flex-col    xl:w-3/12 lg:end-12   rounded-md  ">
                <LoginBox />
                <div className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-md text-gray-800">
                    <div className="mb-4">
                        <h1 className="text-lg font-semibold border-b pb-2 mb-2">Admin</h1>
                        <p className="text-sm">
                            <span className="font-medium">Username:</span> sandeeppachat@gmail.com
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Password:</span> Asd@123.com
                        </p>
                    </div>
                    <div className="mb-4">
                        <h1 className="text-lg font-semibold border-b pb-2 mb-2">Client</h1>
                        <p className="text-sm">
                            <span className="font-medium">Username:</span> sanooppachat@gmail.com
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Password:</span> Asd@123.com
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login