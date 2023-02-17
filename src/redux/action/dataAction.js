import { UPDATE_EPISODE_DATA,UPDATE_LOCATION_DATA,UPDATE_CHARACTER_DATA,UPDATE_PROFILE_DATA } from "../reduxConstants";


export const updateEpisodeData=(data)=>{
    return({
        type:UPDATE_EPISODE_DATA,
        data
    })
}

export const updateCharacterData=(data)=>{
    return({
        type:UPDATE_CHARACTER_DATA,
        data
    })
}

export const updateLocationData=(data)=>{
    return({
        type:UPDATE_LOCATION_DATA,
        data
    })
}


export const updateProfileData=(data)=>{
    return({
        type:UPDATE_PROFILE_DATA,
        data
    })
}