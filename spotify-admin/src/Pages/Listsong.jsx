/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {url} from '../App'
import { toast } from 'react-toastify';


const Listsong = () => {

    const [data,setData]=useState([]);
    const fetchSonngs =async ()=>{

        try{
            const response = await axios.get(`${url}/api/song/list`); // Remove extra single quotes

            if (response.data.success) {
                setData(response.data.songs);
            }

        }catch (error){
               toast.error("Error Occur");

        }

    }

   const removeSong=async(id)=>{
      try{
        const response = await axios.post('${url}/api/song/remove',{id});
        if(response.data.success){
            toast.success(response.data.message);
            await fetchSonngs();

        }

      }catch(error){
        toast.error("Error occur");

      }

   }


    useEffect(()=>{
           fetchSonngs();
    },[])

  return (

    <div>
        <p>All Song List</p>
        <br/>
        <div>
            <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm  mr-5 bg-grey-100'>
             <b>
                Image
             </b>
             <b>
                Name
             </b>
             <b>
                Album
             </b>
             <b>
                Duration
             </b>
             <b>
                Action
             </b>
             <div>
                {data.map((item,index)=>{
                    return (
                    <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]  items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                      <img alt='' className='w-12' src={item.image}/>
                       <p>{item.name} </p>     
                       <p>{item.album} </p>
                       <p>{item.duration}</p>
                       <p className='cursor pointer ' onClick={()=>removeSong(item._id)}>x</p>
                       
                        </div>)

                })}
             </div>
             
            </div>
        </div>


    </div>
  
  )
}

export default Listsong
