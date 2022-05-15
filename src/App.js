import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './component/ui/Header';
import Character from './component/character/Character';
import Search from './component/ui/Search';
import axios from 'axios';
function App() {
  const [items,setItems]=useState([])
  const [isLoading,setisLoading]=useState(true)
  const [query,setQuery]=useState('')

  useEffect(()=>{
     const fetchItems=async()=>{
       const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
       setItems(result.data)
       setisLoading(false)
     }
     fetchItems();
  },[query])
  return (
    <div className="container">
       <Header/>
       <Search getQuery={(q)=>setQuery(q)}/>
       <Character isLoading={isLoading}  items={items}/>
    </div>
  ); 
}

export default App;
