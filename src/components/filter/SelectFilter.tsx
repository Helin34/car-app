import React from 'react'
import ReactSelect from "react-select"
import { fuels } from '../../utils/constants'
import { useSearchParams } from 'react-router-dom'
const SelectFilter = () => {
  const [params,setParams] = useSearchParams();

  const fuel =params.get("fuel_type")

  const selected=!fuel ? fuels[0]:{
    label:params.get("make") || "",
    value:params.get("make") || "",

  }

  return (
    <div>
     < ReactSelect options={fuels} className="text-black min-w-[130px]" defaultValue={fuels[0]} onChange={(e)=>{
      params.set("fuel_type",e!.value.toLowerCase());

      setParams(params);
     }}/>
    </div>
  )
}

export default SelectFilter
