import React,{useState} from 'react'
import EpiCard from '../cards/EpiCard';
import EpisodeFilter from '../filters/EpisodeFilter';
import { useSelector } from 'react-redux';
import CharCard from '../cards/CharCard.js';

import {BsFilterLeft} from "react-icons/bs";
import "../../styles/home.css";

const Episode = () => {

    const list =useSelector( (state)=> state. episodeReducer);
    const cards = useSelector( (state)=> state.characterReducer );
    const variables = useSelector((state) => state.variableReducer);
    
    const showCard = variables.show_episode_card;

    
    const width = window.screen.width;

    const [ showFilter, setShowFilter] = useState(width>999?true:false);

  return (
    <>
 <div className="filter-icon">
              <BsFilterLeft onClick={()=>setShowFilter(!showFilter)} />
           </div>
        <div className="home-body">
          <div className="show-filter" style={{display : showFilter? "flex":"none"}}>
            <p className="filter-box-heading">Filter</p>
            <div className="filter-compo">
              <EpisodeFilter />
              
            </div>
          </div>
       <div className="show-cads">
       {showCard===true? (
        cards.length !== 0 ? (
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
              )):(<table className='table-box'>
                <thead className='table-head'>
                     <tr className='table-row'>
                        <th className='table-head-col'>Name</th>
                        <th className='table-head-col'>Code</th>
                        <th className='table-head-col'>Air Date</th>
                     </tr>
                </thead>
                <tbody className='table-head'>
                {list.length !== 0 ? (
                list.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <EpiCard data={data} />
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                    <td>Does Not Found Any Details</td>
                </tr>
                 
              )}
                </tbody>
            </table>)}
       
          </div>
    </div>
    </>
  )
}

export default Episode;