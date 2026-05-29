import React from 'react'
import SelectFilter from './SelectFilter'
import YearFilter from './YearFilter'
import Search from '../searchbar'

const Filter = () => {
  return (
    <div id='filter' className=' mt-12 padding-x padding-y max-width'>
            <div className='home__text-container text-white'>
                <h1 className= 'text-white text-4xl font-extrabold '>Araba Kataloğu</h1>
                <p className='text-white'>Beğenebileceğin arabaları keşfet</p>
                <div className='home__filters text-white'>
                    <Search/>
                    <div className='home__filter-container text-white'>
                        <SelectFilter/>
                        <YearFilter/>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Filter
