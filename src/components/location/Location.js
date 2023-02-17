import React, { useState } from 'react'
import LocFilter from '../filters/LocFilter.js';
import LocCard from '../cards/LocCard';
import CharCard from '../cards/CharCard.js';
import { useSelector } from 'react-redux';
import "../../styles/home.css";
import {BsFilterLeft} from "react-icons/bs";

const Location = () => {
  
 const list =useSelector( (state)=> state. locationReducer);
 const cards = useSelector( (state)=> state.characterReducer );
 const variables = useSelector((state) => state.variableReducer);
 
 const showCard = variables.show_location_card;
 
 const width = window.screen.width;

 const [ showFilter, setShowFilter] = useState(width>999?true:false);
 

  return (
    <>    <div className="filter-icon">
              <BsFilterLeft onClick={()=>setShowFilter(!showFilter)} />
           </div>
        <div className="home-body">
          <div className="show-filter" style={{display : showFilter? "flex":"none"}}>
            <p className="filter-box-heading">Filter</p>
            <div className="filter-compo">
              <LocFilter />
              
            </div>
          </div>
       <div className="show-cads">
       {showCard===true? (cards.length !== 0 ? (
                cards.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <CharCard data={data} />
                    </React.Fragment>
                  );
                })
              ) : (
                <div>
                  <h3>Does Not Found Any Details</h3>
                </div>
              )):( 
                <table className='table-box'>
                <thead className='table-head'>
                     <tr className='table-row'>
                        <th className='table-head-col'>Name</th>
                        <th className='table-head-col'>Dimension</th>
                        <th className='table-head-col'>Type</th>
                     </tr>
                </thead>
                <tbody className='table-head'>
                {list.length !== 0 ? (
                list.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <LocCard data={data} />
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                    <td>Does Not Found Any Details</td>
                </tr>
                 
              )}
                </tbody>
            </table>
              )}
           
          </div>
    </div>
    </>
  )
}

export default Location;