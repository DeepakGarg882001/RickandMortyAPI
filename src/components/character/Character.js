import React,{useState} from 'react'
import CharFilter from '../filters/CharFilter';
import CharCard from '../cards/CharCard';
import {BsFilterLeft} from "react-icons/bs";

import "../../styles/home.css";
import { useSelector } from 'react-redux';

const Character = () => {
   
    const list =useSelector( (state)=> state.characterReducer);
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
              <CharFilter />
              
            </div>
          </div>
       <div className="show-cads">
              {list.length !== 0 ? (
                list.map((data, index) => {
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
              )}
          </div>
    </div>
   </>
  )
}

export default Character;