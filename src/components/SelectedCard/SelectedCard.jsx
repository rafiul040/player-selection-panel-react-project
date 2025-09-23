import React from 'react';
import deleteFrame from '../../assets/Frame.png'

const SelectedCard = ({ player, removePlayer }) => {

    const handleRemove = () => {
        removePlayer(
            player
        )
    }

    return (
         <div className='border-1 rounded-lg border-gray-300 p-3 flex justify-between items-center'>
                        <div className='flex items-center -mt-7'>
                            <img src={player.player_image} alt="" className='h-[60px] w-[60px] mt-7 rounded-md' />
                        <div className='ml-3'>
                        <h1 className='text-sm'>{player.player_name}</h1>
                        <p className='text-xl text-gray-500 -mt-5'>{player.playing_role}</p>
                        </div>
                        </div>
        
        
                        <div onClick={handleRemove}>
                            <img src={deleteFrame} alt="" />
                        </div>
        
                    </div>
    );
};

export default SelectedCard;