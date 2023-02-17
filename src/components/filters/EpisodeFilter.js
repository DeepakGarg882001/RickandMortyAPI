import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { updateEpisodeCode } from '../../redux/action/variableAction';
import "../../styles/home.css";

const EpisodeFilter = () => {

  const variables = useSelector((state)=> state.variableReducer);
  const dispatch = useDispatch();

  const episodeCode = variables.episode_code;
  const [episodeArray, setEpisodeArray] = useState([]);
 
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPage,setTotalPage]= useState(2);
  


  useEffect(() => {
    const getEpisodes = async () => {
      const makeRequest = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await makeRequest.json();
      setTotalPage(response.info.pages);
      let arrayLength = response.results.length;
     for(let index=0;index<arrayLength;index++){
         let isEpisodeMatch = false;

         for(let j=0;j<episodeArray.length;j++){
            if(episodeArray[j]===response.results[index].episode){
              isEpisodeMatch=true;
                break;
            }
         }

        
         if(isEpisodeMatch===false){
          episodeArray.push(response.results[index].episode);
         }
        

     }

      if (currentPage !== totalPage) {
        setCurrentPage(currentPage + 1);
      }
    };

    getEpisodes();
  }, [currentPage]);

  return (
    <>
    <div className="Under-filter-compo">
       <div className="flter-col">
            <p className="fiter-title">Episode Code</p>
            <div className="filter-data-box" style={{maxHeight:"77vh"}}>
                {episodeArray.length!==0? episodeArray.map((data,index)=>{
                    return(
                        <React.Fragment key={index}>
                           <button 
                           className="filter-data-btn"
                           onClick={()=>dispatch(updateEpisodeCode(episodeCode=== data? "":data))}
                           style={episodeCode=== data ? {color:"white",backgroundColor:"blue"} : {color:"blue",backgroundColor:"white"}}
                            >{data}</button>
                        </React.Fragment>
                    )
                }):null}
            </div>
    </div> 
    </div>
    </>
  )
}

export default EpisodeFilter