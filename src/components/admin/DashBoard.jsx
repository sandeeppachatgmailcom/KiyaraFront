import LineCharts from "../chartSample/LineCharts"
import SampleChart2 from "../chartSample/SampleChart2"
import SampleChart3 from "../chartSample/SampleChart3"
import SampleChart4 from "../chartSample/SampleChart4"

const DashBoard = () => {

    return (
        <div className="w-full border border-cyan-800 rounded-lg flex-wrap justify-start items-start overflow-scroll  p-2 gap-3  flex lg:flex-row     ">
            
                <div className=" w-11/12 lg:w-3/12  h-60 flex justify-center items-center rounded-md shadow-lg shadow-sky-400 bg-sky-800   ">
                    <LineCharts/>
                </div>
                <div className=" w-11/12 lg:w-3/12 h-60 flex justify-center items-center rounded-md shadow-lg shadow-sky-400 bg-sky-800 ">
                    <SampleChart2/>
                </div>
                <div className=" w-11/12 lg:w-3/12 h-60 flex justify-center items-center rounded-md shadow-lg shadow-sky-400 bg-sky-800">
                   <SampleChart3/>
                </div>
                <div className=" w-11/12 lg:w-3/12 h-60 flex justify-center items-center rounded-md shadow-lg shadow-sky-400 bg-sky-800">
                    <SampleChart4/>
                </div>

            
        </div>
    )
}

export default DashBoard