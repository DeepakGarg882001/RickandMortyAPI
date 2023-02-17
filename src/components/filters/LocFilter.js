import React, { useEffect, useState } from "react";

import { useSelector,useDispatch } from "react-redux";
import { updateLocationDimension,updateLocationType } from "../../redux/action/variableAction";

import "../../styles/home.css";

const LocFilter = () => {
  
  const variables = useSelector((state)=> state.variableReducer);
  const dispatch = useDispatch();

  const dimension = variables.location_dimension;
  const type = variables.location_type;
  const [dimensionArray, setDimensionArray] = useState([]);
  const [typeArray, setTypeArray] = useState([]);
 
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPage,setTotalPage]= useState(2);
  


  useEffect(() => {
    const getLocations = async () => {
      const makeRequest = await fetch(
        `https://rickandmortyapi.com/api/location?page=${currentPage}`,
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
         let isDimensionMatch = false;
         let isTypeMatch = false;

         for(let j=0;j<dimensionArray.length;j++){
            if(dimensionArray[j]===response.results[index].dimension){
                isDimensionMatch=true;
                break;
            }
         }

         for(let j=0;j<typeArray.length;j++){
            if(typeArray[j]===response.results[index].type){
                isTypeMatch=true;
                break;
            }
         }
         if(isDimensionMatch===false){
            dimensionArray.push(response.results[index].dimension);
         }
         if(isTypeMatch===false){
            typeArray.push(response.results[index].type);
         }

     }

      if (currentPage !== totalPage) {
        setCurrentPage(currentPage + 1);
      }
    };

    getLocations();
  }, [currentPage]);

  return (
    <>
      <div className="Under-filter-compo">
         
         <div className="flter-col">
            <p className="fiter-title" >Dimension</p>
            <div className="filter-data-box">
                {dimensionArray.length!==0? dimensionArray.map((data,index)=>{
                    return(
                        <React.Fragment key={index}>
                           <button 
                           className="filter-data-btn"
                           onClick={()=>dispatch(updateLocationDimension(dimension=== data? "":data))}
                           style={dimension=== data ? {color:"white",backgroundColor:"blue"} : {color:"blue",backgroundColor:"white"}}
                            >{data}</button>
                        </React.Fragment>
                    )
                }):null}
            </div>
         </div>
         <div className="flter-col">
            <p className="fiter-title" >Type</p>
            <div className="filter-data-box">
                {typeArray.length!==0? typeArray.map((data,index)=>{
                    return(
                        <React.Fragment key={index}>
                           <button 
                            className="filter-data-btn"
                           onClick={()=>dispatch(updateLocationType(type=== data? "":data))} 
                           style={type=== data ? {color:"white",backgroundColor:"blue"} : {color:"blue",backgroundColor:"white"}}

                           >{data}</button>
                        </React.Fragment>
                    )
                }):null}
            </div>
         </div>
      </div>
    </>
  );
};

export default LocFilter;
