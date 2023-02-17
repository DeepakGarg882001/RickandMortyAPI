import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateCharacterData } from '../../redux/action/dataAction';
import { updateShowEpisodeCard,updateCurrentPage,updateTotalPage } from '../../redux/action/variableAction';
import { toast } from 'react-toastify';
import "../../styles/home.css";

const EpiCard = ({data}) => {
     
    const charArray =[];
    const dispatch = useDispatch();
   
    let activeTime = 9999 ;


    const rowIsClicked = async(characters)=>{
        dispatch(updateShowEpisodeCard(true));
        
        dispatch(updateCurrentPage(1));

        toast.info('Please wait getting the Characters', {
          position: "bottom-left",
          autoClose: activeTime,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId:"success1"
          });
        for(let index=0;index<characters.length;index++){
            
            const makeRequest = await fetch(`${characters[index]}`,{
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });
            const response = await makeRequest.json();
            charArray.push(response);

       

        }
      
        dispatch(updateCharacterData(charArray));
        dispatch(updateTotalPage(1));
       
       

    }


  return (
    <tr className='table-row' onClick={()=>rowIsClicked(data.characters)}>
    <td className='table-row-col'>{data.name}</td>
    <td className='table-row-col'>{data.episode}</td>
    <td className='table-row-col'>{data.air_date}</td>
   </tr>
  )
}

export default EpiCard;