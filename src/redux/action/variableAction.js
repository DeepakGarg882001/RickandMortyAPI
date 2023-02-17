import {
    UPDATE_CHARACTER_GENDER,
    UPDATE_CHARACTER_NAME,
    UPDATE_CHARACTER_SPECIES,
    UPDATE_CHARACTER_STATUS,
    UPDATE_CURRENT_PAGE,
    UPDATE_TOTOAL_PAGE,
    UPDATE_EPISODE_CODE,
    UPDATE_EPISODE_NAME,
    UPDATE_LOCATION_DIMENSION,
    UPDATE_LOCATION_NAME,
    UPDATE_LOCATION_TYPE,
    UPDATE_SHOW_EPISODE_CARD,
    UPDATE_SHOW_LOCATION_CARD,
  } from "../reduxConstants";

  
  export const updateShowLocationCard = (data)=>{
    return({
        type:UPDATE_SHOW_LOCATION_CARD,
        data
    })
  }
  
  export const updateShowEpisodeCard = (data)=>{
    return({
        type:UPDATE_SHOW_EPISODE_CARD,
        data
    })
  }

  export const updateEpisodeCode =(data)=>{
    return({
        type:UPDATE_EPISODE_CODE,
        data
    })
  }

  
  export const updateEpisodeName =(data)=>{
    return({
        type:UPDATE_EPISODE_NAME,
        data
    })
  }

  
  export const updateLocationDimension =(data)=>{
    return({
        type:UPDATE_LOCATION_DIMENSION,
        data
    })
  }

  
  export const updateLocationName =(data)=>{
    return({
        type:UPDATE_LOCATION_NAME,
        data
    })
  }

  export const updateLocationType =(data)=>{
    return({
        type:UPDATE_LOCATION_TYPE,
        data
    })
  }



  export const updateCharacterGender =(data)=>{
    return({
        type:UPDATE_CHARACTER_GENDER,
        data
    })
  }

  
  export const updateCharacterName =(data)=>{
    return({
        type:UPDATE_CHARACTER_NAME,
        data
    })
  }

  
  export const updateCharacterSpecies =(data)=>{
    return({
        type:UPDATE_CHARACTER_SPECIES,
        data
    })
  }

  
  export const updateCharacterStatus =(data)=>{
    return({
        type:UPDATE_CHARACTER_STATUS,
        data
    })
  }

  
  export const updateCurrentPage =(data)=>{
    return({
        type:UPDATE_CURRENT_PAGE,
        data
    })
  }

  
  export const updateTotalPage =(data)=>{
    return({
        type:UPDATE_TOTOAL_PAGE,
        data
    })
  }

 
