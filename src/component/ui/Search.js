import React, {useState,useEffect} from 'react';
const Search = ({getQuery}) => {
   const [text,setText]=useState('') 
  const onChange=(q)=>{
     setText(q);
     getQuery(q)
  } 
  return (
    <section className='search'>
        <form>
            <input type="text" value={text} onChange={(e)=>onChange(e.target.value)} className='form-control' placeholder='search characters' autoFocus/>
        </form>
    </section>
  )
}

export default Search