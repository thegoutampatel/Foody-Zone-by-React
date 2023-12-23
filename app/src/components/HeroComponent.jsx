import { BASE_URL } from "../App"
import Button from "./Button"

function HeroComponent({data}) {
  return (
    <div className="bg-[url('/public/background.png')] h-[79.9vh] overflow-x-hidden relative bg-cover">
        <div className="absolute inset-0 bg-black bg-opacity-50 h-[100%]">
            
            <div className=" flex  flex-wrap gap-[15px] lg:gap-[20px] justify-center items-center m-5">
                {
                    data?.map((food)=> <div key={food.name}> 
                    <div className=" flex text-white w-[340px] h-[167px] border-2 border-red-500 rounded-lg backdrop-blur-md items-center">
                        <img src={food.image} alt="foodimg" className=" rounded-full  w-[133px] h-[133px]"/>
                        <div className="flex flex-col ">
                        <h1 className="text-[16px] font-semibold">{food.name}</h1>
                        <h2 className="text-[12px] w-[168px] h-[59px]">{food.text}</h2>
                        <button className=" ml-auto mt-2 bg-[#FF4343] w-[60px] h-[25px] text-center rounded-md text-white text-[16px]">${food.price}.00</button>

                        </div>
                    </div> 
                    </div>)
                }
            </div>


        </div>
    </div> 
  )
}

export default HeroComponent