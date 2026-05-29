
import React, { useMemo, useState, type FormEvent } from 'react'
import ReactSelect from "react-select";
import {makes} from "../../utils/constants"
import { useParams, useSearchParams } from 'react-router-dom';
const Search = () => {
  const [make,setMake] =useState<string>("");
  const [model,setModel] =useState<string>("");
  const [params,setParams] =useSearchParams();

  

   const options=useMemo(()=> makes.map((make)=>({value:make,label:make})),[]) ;

   const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    setParams({make:make.toLowerCase(),model:model.toLowerCase()});
   }
  
  return (
    <form onSubmit={handleSubmit} className='searchbar gap-3'>
      <div className='searchbar__item'>
      <ReactSelect onChange={(e)=>setMake(e!.value)} className='w-full text-black' options={options}
      placeholder="Marka Seçiniz.."/>
      <button className='ml-3 sm:hidden'>
        <img src="/search.svg" className='size-[40px]' alt="" />
      </button>
    </div>
    <div className='searchbar__item'>
      <img className='absolute ml-3' src="/model-icon.png" alt="" width={25} />
      <input type="text"  className='searchbar__input rounded bg-white text-black' placeholder='Örn:Civic'
      onChange={(e)=>setModel(e.target.value)} />
       <button className='ml-3 '>
        <img src="/search.svg" className='size-[40px]' alt="" />
      </button>
    </div>
    </form>
  )
}

export default Search
