import './App.css'

import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/Available Players/AvailablePlayers'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'
import { Suspense } from 'react'


  const fetchPlayers = async () => {
    const res = await fetch("/players.json")
    return res.json()
  }


function App() {

  const playerPromise = fetchPlayers()


  return (
    <div className='bg-white'>



    <div className='bg-white max-w-[1200px] mx-auto p-5 min-h-screen text-black'>
{/* <div> */}


    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
    }>
    <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>

    </Suspense>
    {/* <SelectedPlayers></SelectedPlayers> */}


    </div>


    
      </div>
  )
}

export default App
