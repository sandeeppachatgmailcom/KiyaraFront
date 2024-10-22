import useDynamicIcons from "../../hooks/useDynamicIcons"

const NewClient = ({closeWindow}) => {
    const getMyIcon = useDynamicIcons()
    const CloseIcon = getMyIcon('close')
    return (
        <div className="w-full overflow-hidden lg:flex-row flex-col  h-[100%] border   bg-opacity-10 ">
            <div className="h-10 items-center  w-full  bg-violet-600 flex justify-end ">
                <CloseIcon onClick={()=>closeWindow()}  className='me-2 cursor-pointer text-white' />
            </div>
            <div className="flex lg:flex-row flex-col border">
                <div className="w-3/12 flex flex-col lg:w-1/4 p-2 relative shadow-lg">
                    <label
                         
                        className="absolute text-sm     bg-transparent  px-1   text-gray-700"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="h-10 px-4 text-sm border w-full border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4"
                    />
                </div>
            </div>


            <div className="h-10 items-center  w-full   flex justify-end ">
                <button type="button" className="rounded-sm  "> Save </button>
            </div>
        </div>
    )
}
export default NewClient