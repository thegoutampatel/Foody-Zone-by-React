import React, { useEffect, useState } from 'react'
import NavComponent from './components/NavComponent'
import HeroComponent from './components/HeroComponent'
import loadingImg from './assets/loading.gif' 
import menu from './menu.json'

export const BASE_URL = menu ;


export default function App() {

  const [data, setData] = useState(null);
  const [filterdData, setFilteredData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);

  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () =>{
      setLoading(true);
      try {
      //   const response = await fetch(BASE_URL);
  
      // const json = await response.json();
      setData(menu);
      setFilteredData(menu);
      setLoading(false);
  
      } catch (e) {
          setError("Server Not Responding Try After Some Time....!")
      }
    }

    fetchFoodData();
  }, []);


  const filterFood = (type)=>{
    if(type == "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => 
    food.type.toLowerCase().includes(type.toLowerCase()));

    setFilteredData(filter);
    setSelectedBtn(type);
  }


  const searchFood = (e)=>{
    const searchValue = e.target.value;

    console.log(searchValue);

    if(searchValue == " ") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) => 
        food.name.toLowerCase().includes(searchValue.toLowerCase()));

      setFilteredData(filter);  

  };
  

  if(error) return <div className='flex items-center justify-center h-[100vh] text-red-600'>{error}</div>
  if(loading) return <div className='flex flex-col items-center justify-center h-[100vh]'><img src={loadingImg} alt="" /> <p>Loading...</p></div>

  return (
    <div className=' w-[100%]  box-border p-0 m-0 bg-[#323334]'>
      <NavComponent searchFood={searchFood} filterFood={filterFood} />
      <HeroComponent data={filterdData}/>
    </div>
  )
}
