import React from 'react'
import { useDispatch } from 'react-redux';
import { updateCharacterData } from '../../redux/action/dataAction';
import { updateShowLocationCard ,updateCurrentPage,updateTotalPage} from '../../redux/action/variableAction';
import { toast } from 'react-toastify';
import "../../styles/home.css";

const LocCard = ({data}) => {

    const charArray =[];
    const dispatch = useDispatch();
    let activeTime = 9999 ;

    const rowIsClicked = async(characters)=>{
            
      dispatch(updateCurrentPage(1));

         console.log("row is clicked");
         dispatch(updateShowLocationCard(true));

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
            console.log(response);
            charArray.push(response);

        }
        console.log(charArray);
        dispatch(updateCharacterData(charArray));
        dispatch(updateTotalPage(1));
       
    }



  return (
    <>
        <tr className='table-row' onClick={()=>rowIsClicked(data.residents)}>
            <td className='table-row-col'>{data.name}</td>
            <td className='table-row-col'>{data.dimension}</td>
            <td className='table-row-col'>{data.type}</td>
        </tr>
    </>
  )
}

export default LocCard;