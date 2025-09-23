import './App.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/Available Players/AvailablePlayers'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'


  const fetchPlayers = async () => {
    const res = await fetch("/players.json")
    return res.json()
  }

  const playerPromise = fetchPlayers()
function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])


  const removePlayer = (p) => {
    const filterData = purchasedPlayers.filter(ply => ply.player_name !==p.player_name)
    setPurchasedPlayers(filterData)
    setAvailableBalance(availableBalance +parseInt(p.price.split("USD").join("").split(",").join("")))
  }



  return (
    <div className='bg-white'>



    <div className='bg-white max-w-[1200px] mx-auto p-5 min-h-screen text-black'>
{/* <div> */}


    <Navbar availableBalance={availableBalance}></Navbar>

    <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>
      {toggle === true ? "Available Players" : `Selected Player (${purchasedPlayers.length}/6)`}
    </h1>


    <div className='bg-white'>
      <button onClick={() => setToggle(true)} className={`py-3 cursor-pointer px-5 border-1 border-r-0 border-gray-400 font-semibold rounded-l-2xl ${toggle === true? "bg-[#e7fe29]" : ""}`}>Available</button>
      <button onClick={() => setToggle(false)} className={`py-3 cursor-pointer px-5 border-1 border-l-0 border-gray-400 font-semibold rounded-r-2xl ${toggle === false? "bg-[#e7fe29]" : ""}`}>Selected <span>({purchasedPlayers.length})</span></button>
    </div>
    </div>


    {
      toggle === true ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
    }>
    <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>

    </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
    }






    </div>


      <ToastContainer/>
      </div>
  )
}

export default App
