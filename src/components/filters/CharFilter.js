import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCharacterGender,updateCharacterSpecies,updateCharacterStatus } from "../../redux/action/variableAction";
import "../../styles/home.css";

const CharFilter = () => {
  
  const dispatch = useDispatch();
  const variables = useSelector((state)=> state.variableReducer);

  const status = ["Alive", "Dead", "unknown"];
  const gender = ["Female", "Male", "Genderless"];
  const species = ["Human", "Alien"];

  const statusQuery = variables.character_status;
  const genderQuery = variables.character_gender;
  const speciesQuery = variables.character_species;

  
  return (
    <>
      <div className="Under-filter-compo">
        <div className="flter-col">
          <p className="fiter-title">Status</p>
          <div className="filter-data-box" style={{maxHeight:"77vh"}}>
            {status.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <button
                  className="filter-data-btn"
                    onClick={() =>statusQuery === data ? dispatch(updateCharacterStatus("")) :dispatch(updateCharacterStatus(data))
                    }
                    style={statusQuery=== data ? {color:"white",backgroundColor:"blue"} : {color:"blue",backgroundColor:"white"}}
                  >
                    {data}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="flter-col">
          <p className="fiter-title" >Species</p>
          <div className="filter-data-box" style={{maxHeight:"77vh"}}>
            {species.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <button
                  className="filter-data-btn"
                    onClick={() =>dispatch(updateCharacterSpecies(speciesQuery === data ? "" : data))
                    }
                    style={speciesQuery=== data ? {color:"white",backgroundColor:"blue"} : {color:"blue",backgroundColor:"white"}}

                  >
                    {data}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="flter-col">
          <p className="fiter-title">Gender</p>
          <div className="filter-data-box" style={{maxHeight:"77vh"}}>
            {gender.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <button
                   className="filter-data-btn"
                    onClick={() =>dispatch(updateCharacterGender(genderQuery === data ? "" : data))
                    }
                    style={genderQuery=== data ? {color:"white",backgroundColor:"blue"} : {color:"blue",backgroundColor:"white"}}

                  >
                    {data}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharFilter;
