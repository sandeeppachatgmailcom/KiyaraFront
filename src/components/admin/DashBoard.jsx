const DashBoard = () => {

    return (
        <div className="w-full flex-wrap   p-5 gap-3  flex lg:flex-row flex-col   ">
            
                <div className="w-3/12 h-52 flex justify-center items-center rounded-md shadow-lg shadow-pink-400 bg-pink-500">
                    Client DashBoard
                </div>
                <div className="w-3/12 h-52 flex justify-center items-center rounded-md shadow-lg shadow-pink-400 bg-pink-500">
                    User summary
                </div>
                <div className="w-3/12 h-52 flex justify-center items-center rounded-md shadow-lg shadow-pink-400 bg-pink-500">
                    Monthly Growth
                </div>
                <div className="w-3/12 h-52 flex justify-center items-center rounded-md shadow-lg shadow-pink-400 bg-pink-500">

                </div>

            
        </div>
    )
}

export default DashBoard