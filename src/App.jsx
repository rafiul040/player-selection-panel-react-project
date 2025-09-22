
import './App.css'
import navImg from "./assets/logo.png"
import dollarImg from "./assets/dollar 1.png"

function App() {

  return (
    <>



   <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1 ml-5"><a className='text-xl'>
    <img className='w-[60px] h-[60px]' src={navImg} alt="" />
  </a>
  </div>
  <div className="flex items-center">
    <span className='mr-1'>60000000000</span>
    <span className='mr-1'>Coin</span>
    <span className='mr-5'><img src={dollarImg} alt="" /></span>
  </div>
</div>



    </>
  )
}

export default App
