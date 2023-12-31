import FilterBtn from "./FilterBtn"

function NavComponent({searchFood, filterFood}) {
  return (
    <div className=" pt-[4vh] lg:pt-[8vh] pb-[3vh] ">
        <div className="flex lg:flex-row flex-col items-center lg:justify-around gap-2 lg:gap-0 ">
            <div>
                <h1 className="text-[50px] font-bold text-white">F<span className="text-red-600">oo</span>dyZ<span className="text-red-600">o</span>ne</h1>
            </div>
            <div>
                <input onChange={searchFood} type="text"  placeholder="Search Food..." className="bg-transparent border-red-500 border rounded-sm pr-1 pl-0 lg:pr-2 lg:pl-1 text-white"/>
            </div>
        </div>

        <FilterBtn filterFood={filterFood}/>
    </div>
  )
}

export default NavComponent