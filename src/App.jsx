import './App.css'

import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/Available Players/AvailablePlayers'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'


  const fetchPlayers = async () => {
    const res = await fetch("/players.json")
    return res.json()
  }


function App() {
  const [toggle, setToggle] = useState(true)

  const playerPromise = fetchPlayers()


  return (
    <div className='bg-white'>



    <div className='bg-white max-w-[1200px] mx-auto p-5 min-h-screen text-black'>
{/* <div> */}


    <Navbar></Navbar>

    <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>Available Players</h1>


    <div className='bg-white'>
      <button onClick={() => setToggle(true)} className={`py-3 cursor-pointer px-5 border-1 border-r-0 border-gray-400 font-semibold rounded-l-2xl ${toggle === true? "bg-[#e7fe29]" : ""}`}>Available</button>
      <button onClick={() => setToggle(false)} className={`py-3 cursor-pointer px-5 border-1 border-l-0 border-gray-400 font-semibold rounded-r-2xl ${toggle === false? "bg-[#e7fe29]" : ""}`}>Selected <span>(0)</span></button>
      {/* <button onClick={() => setToggle(false)} className={`py-3 cursor-pointer font-semibold text-gray-600 px-5 border-1 border-l-0 rounded-r-xl border-gray-400 bg-white ${toggle === false? "bg-[#e7e78a]" : "" }`}>Selected <span>(0)</span></button> */}
    </div>
    </div>


    {
      toggle === true ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
    }>
    <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>

    </Suspense> : <SelectedPlayers></SelectedPlayers>
    }






    </div>


    
      </div>
  )
}

export default App
