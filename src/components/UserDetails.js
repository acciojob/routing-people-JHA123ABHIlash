import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetails() {
const url="https://jsonplaceholder.typicode.com/users";
  const {id}=useParams();
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
  

      async function fetchData(){
          setLoading(true);
          try {
              const res=await fetch(url);
              const datas=await res.json();
              setData(datas);
  
          } catch (error) {
              setData([]);
              
          }
          setLoading(false);
      }
      useEffect(()=>{
          fetchData()
      },[]);

      const filterdata=data.filter((el)=>(el.id==id));
      console.log("filter data is:",filterdata);
  return (
    <div>
      <h1>User Details</h1>
      
         {
            loading ? 
            (<div>Loading...</div>):
            (
               filterdata.map((el)=>(
                <div key={el.id}>
                  <p><b>Name: </b>{el.name}</p>
                  <p><b>Username: </b>{el.username}</p>
                  <p><b>Email: </b>{el.email}</p>
                  <p><b>Website: </b>{el.website}</p>
                </div>
               ))
            )
         }
      
    </div>
  )
}
