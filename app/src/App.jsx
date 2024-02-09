import React, { useEffect, useState } from 'react'
import NavComponent from './components/NavComponent'
import HeroComponent from './components/HeroComponent'

export const BASE_URL = "https://mocki.io/v1/ff42c185-4eb5-475e-859c-f6c7b969a79f";


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
        const response = await fetch(BASE_URL);
  
      const json = await response.json();
      
      setData(json);
      setFilteredData(json);
      setLoading(false);
  
      } catch (error) {
          setErr("Server Not Responding Try After Some Time....!")
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
  

  if(error) return <div>{error}</div>
  if(loading) return <div><img src="./assets/loading.gif" alt="" /></div>


  return (
    <div className=' w-[100%]  box-border p-0 m-0 bg-[#323334]'>
      <NavComponent searchFood={searchFood} filterFood={filterFood} />
      <HeroComponent data={filterdData}/>
    </div>
  )
}
