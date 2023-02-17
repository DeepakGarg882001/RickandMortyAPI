import React from 'react'
import { useSelector } from 'react-redux';

import "../../styles/profile.css";
const CharacterProfile = () => {
 
    const data = useSelector( (state)=> state.profileReducer)
    console.log(data);
    
    const date = new Date(data.created).toLocaleDateString();
    


  return (
   <>
     <div className='profile-canvas'>

         <div className='profile-canvas-row-1'>
            <p className='profile-date'>Created at : <span>{date}</span></p>
         </div>
         <div className='profile-row-2'> 
            <div className='profile-img-sec' >
                <img src={data.image} className="profile-image"/>
            </div>
            <div className='profile-details-box'>
                <h2 className='profile-name'>{data.name}</h2>
                <p className='profile-detail'>Species : <span>{data.species}</span></p>
                <p className='profile-detail'>Gender : <span>{data.gender}</span></p>
                <p className='profile-detail'>Status : <span>{data.status}</span></p>
                <p className='profile-detail'>Type : <span>{data.type}</span></p>
                <p className='profile-detail'>Episodes : <span>{data.episode?data.episode.length:""}</span></p>
            </div>

         </div>
        
        <div className='profile-row-3'>
            <p>Location : <span>{data.location?data.location.name:""}</span></p>
            <p>Origin : <span>{data.origin?data.origin.name:""}</span></p>
        </div>
      
        <div>

        </div>

     </div>

   </>
  )
}

export default CharacterProfile;