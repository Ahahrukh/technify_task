import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Dashboard = ({setIsLogin}) => {
    let [data , setData] = useState([])
    useEffect(()=>{
       getserverdata()
    },[])
    async function getserverdata(){
        try {
            let jsondata=await fetch('https://jsonplaceholder.typicode.com/todos/')
            let mainData=await jsondata.json()
            console.log(mainData)
            setData([...mainData])
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <Navbar setIsLogin={setIsLogin}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12'>
        {data.map((elem)=>(
            <div class="max-w-sm bg-white shadow-md rounded-md overflow-hidden" key={elem.id}>
            <div class="px-4 py-3 border-b">
                <h3 class="text-lg font-semibold">{elem.title}</h3>
            </div>
            <div class="px-4 py-2">
                <p class="text-sm text-gray-600">Task Description</p>
            </div>
            <div class="px-4 py-2">
                
                <span class="inline-block px-2 py-1 text-xs font-semibold rounded-full 
                            {{ completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700' }}">
                { elem.completed ? <button className="btn btn-success">Completed</button> : <button className="btn btn-error">Not Completed</button> }
                </span>
            </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard