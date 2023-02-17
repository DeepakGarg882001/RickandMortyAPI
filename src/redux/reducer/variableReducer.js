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

import produce from "immer";

const initialData = {
  character_name: "",
  character_gender: "",
  character_species: "",
  character_status: "",

  location_name: "",
  location_type: "",
  location_dimension: "",

  episode_name: "",
  episode_code: "",

  total_page: "",
  current_page: "",

  show_location_card: false,
  show_episode_card: false,
};

const variableReducer = (data = initialData, action) => {
  switch (action.type) {
    case UPDATE_SHOW_EPISODE_CARD:
      return produce(data, (draft) => {
        draft.show_episode_card = action.data;
      });

    case UPDATE_SHOW_LOCATION_CARD:
      return produce(data, (draft) => {
        draft.show_location_card = action.data;
      });

    case UPDATE_CHARACTER_GENDER:
      return produce(data, (draft) => {
        draft.character_gender = action.data;
        draft.current_page = 1;
      });

    case UPDATE_CHARACTER_NAME:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.character_name = action.data;
      });
    case UPDATE_CHARACTER_SPECIES:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.character_species = action.data;
      });

    case UPDATE_CHARACTER_STATUS:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.character_status = action.data;
      });

    case UPDATE_CURRENT_PAGE:
      return produce(data, (draft) => {
        draft.current_page = action.data;
      });

    case UPDATE_TOTOAL_PAGE:
      return produce(data, (draft) => {
        draft.total_page = action.data;
      });

    case UPDATE_EPISODE_CODE:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.episode_code = action.data;
        draft.show_episode_card = false;
      });

    case UPDATE_EPISODE_NAME:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.episode_name = action.data;
        draft.show_episode_card = false;
      });

    case UPDATE_LOCATION_DIMENSION:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.location_dimension = action.data;
        draft.show_location_card = false;
      });

    case UPDATE_LOCATION_NAME:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.location_name = action.data;
        draft.show_location_card = false;
      });

    case UPDATE_LOCATION_TYPE:
      return produce(data, (draft) => {
        draft.current_page = 1;
        draft.location_type = action.data;
        draft.show_location_card = false;
      });

    default:
      return { ...data };
  }
};

export default variableReducer;
