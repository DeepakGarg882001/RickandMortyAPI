import React from "react";

import "../../styles/home.css";
import {Link,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfileData } from "../../redux/action/dataAction";

const CharCard = ({ data }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const cardIsClicked =async()=>{
     
    navigate("/profile");
    const getProfileData = await fetch(`${data.url}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await getProfileData.json();
    dispatch(updateProfileData(response));

  }
 
   

  return (
    <>
      <div className="card-box" onClick={()=> cardIsClicked()}>
      <Link style={{textDecoration:"none"}} >
       <div className="under-card-box">
           <div className="card-img-sec">
            <img src={data.image} className="card-img" />
           </div>
           <div>
             <h3 className="card-name">{data.name}</h3>
           </div>
           <div className="detail-sec">
        <p className="details-text"><span className="details-text-title">Location :</span> {data.location.name}</p>
        <p className="details-text"><span className="details-text-title">Type :</span> {data.type}</p>
      </div>
           <div className="card-bottom">
           <div className="detail-sec">
             <p className="details-text"><span className="details-text-title">Episodes : </span> {data.episode?data.episode.length:0}</p>
           </div>
           <div className="card-status" style={{backgroundColor:data.status==="Alive"? "green":data.status==="Dead"?"red":"gray"}} >{data.status}</div>
           </div>
      </div>
      </Link>
      </div>
    </>
  );
};

export default CharCard;
