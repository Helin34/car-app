import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Search from './components/searchbar'
import SelectFilter from './components/filter/SelectFilter'
import YearFilter from './components/filter/YearFilter'
import Filter from './components/filter'
import List from './components/list'

const App = () => {
  return (
    <div className='bg-[#171717] min-h-screen text-white'>
        <Header/>

        <Hero/>

        <Filter/>
    
        <List/>
    </div>
  )
}

export default App
