import React, { useEffect, useState } from 'react'
import { fetchCars } from '../../utils/fetchCars';
import type { CarType } from '../../types';
import Warning from './Warning';
import Card from './Card';
import Button from '../button';
import { useSearchParams } from 'react-router-dom';

const List = () => {
    const [cars,setCars] =useState<CarType[] | null> (null);
    console.log("cars length:", cars?.length);
    const [isError,setIsError] = useState<boolean>(false);
    const [limit,setLimit]=useState<number>(5);
   
    const[params] = useSearchParams();

const paramsObj = Object.fromEntries(params.entries()) as {
  make?: string;
  model?: string;
};
 


useEffect(() => {
  const make = paramsObj.make || "BMW";
  const model = paramsObj.model;

  console.log("PARAMS:", { limit, make, model });

  fetchCars({
    limit,
    make,
    model,
  })
    .then(setCars)
    .catch(() => setIsError(true));
}, [limit, params]);
  return (
    <div className='padding-x max-width'>
      {!cars ? <Warning>Yükleniyor</Warning> : isError ? <Warning>Hata !</Warning> :cars.length < 1 ? <Warning>Aranılan kritelere uygun sonuç bulunamadı</Warning> :cars.length >= 1 && <section>
         <div className='home__cars-wrapper'>
            {cars?.map((car,i)=>(<Card key={i} car={car}/>))}
         </div>
         <div className='w-full flex-center py-10'>{limit <30 && (
          <Button title='Devamını Yükle' handleClick={()=>setLimit(limit+5)}/>

         )}
          
         </div>
        </section>}
    </div>
  )
}

export default List
