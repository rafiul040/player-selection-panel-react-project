import React, { useState } from 'react';
import userImg from '../../assets/user 1.png'
import flagImg from '../../assets/report 1.png'
import { toast } from 'react-toastify';
const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers }) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
        if(availableBalance < playerPrice){
            toast("Not Enough Points")
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance-playerPrice)
        setPurchasedPlayers([...purchasedPlayers, playerData])
    };



    return (
       <div class="card bg-white-100 shadow-sm p-4">
       
         <figure>
           <img
             src={player.player_image}
             alt="Shoes" className='w-full h-[300px] object-cover' />
         </figure>
         <div class="">
       
           <div className='flex mt-4'>
           <img className='w-5 h-5' src={userImg} alt="" />
           <h2 class="card-title ml-2">{player.player_name}</h2>
           </div>
       
           <div className='flex justify-between mt-3 border-b-2 pb-3 border-gray-300'>
               <div className='flex'>
               <img src={flagImg} alt="" />
               <span className='mt-0.5 ml-1 text-gray-600'>{player.player_country}</span>
               </div>
               <h2 className='text-sm mr-2 border-1 border-gray-200 py-1 rounded-md px-2 text-gray-600 bg-gray-200 font-semibold'>{player.playing_role}</h2>
           </div>
           
       
               <h2 className='text-md mt-2 font-semibold'>Rating: <span>{player.rating}</span></h2>
       
           <div class="flex justify-between">
               <h2 className='text-sm mt-2 font-semibold'>{player.bating_style}</h2>
               <h2 className='text-sm mt-2 mr-4 text-gray-500 font-semibold'>{player.bowling_style}</h2>
           </div>
       
           <div className='flex justify-between mt-2'>
               <h2 className='text-sm font-semibold'>Price: $<span>{player.price}</span></h2>
               {/* <h2 className='py-2 px-2 font-semibold rounded-md border-1 bg-white text-gray-600 border-gray-200'>Choose Player</h2> */}
               <h2 onClick={() => {handleSelected(player)}} className='text-sm mr-2 border-1 border-gray-200 cursor-pointer rounded-md px-2 text-gray-600 font-semibold'>{isSelected === true? "Selected" : "Choose Player"}</h2>
           </div>
       
         </div>
       </div>
    );
};

export default PlayerCard;