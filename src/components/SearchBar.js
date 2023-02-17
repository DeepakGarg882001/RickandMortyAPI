import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/home.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCharacterName,
  updateEpisodeName,
  updateLocationName,
  updateCurrentPage,
  updateTotalPage,
} from "../redux/action/variableAction";
import {
  updateEpisodeData,
  updateCharacterData,
  updateLocationData,
} from "../redux/action/dataAction";
const SearchBar = () => {
  const variables = useSelector((state) => state.variableReducer);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const characterName = variables.character_name;
  const characterGender = variables.character_gender;
  const characterStatus = variables.character_status;
  const characterSpecies = variables.character_species;
  const locationName = variables.location_name;
  const locationDimension = variables.location_dimension;
  const locationType = variables.location_type;
  const episodeName = variables.episode_name;
  const episodeCode = variables.episode_code;
  const currentPage = variables.current_page;

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/location":
        dispatch(updateLocationName(query));
        break;

      case "/character":
        dispatch(updateCharacterName(query));
        break;

      case "/episode":
        dispatch(updateEpisodeName(query));
        break;
    }
  }, [query]);

  const getDataFromServer = async () => {
    switch (location.pathname) {
      case "/location":
        const makeReqToLoc = await fetch(
          `https://rickandmortyapi.com/api/location?name=${locationName}&type=${locationType}&dimension=${locationDimension}&page=${currentPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseFromLoc = await makeReqToLoc.json();
        console.log(responseFromLoc);
        if (responseFromLoc.error) {
          dispatch(updateLocationData([]));
        } else {
          dispatch(updateTotalPage(responseFromLoc.info.pages));
          if (responseFromLoc.info.prev === null) {
            dispatch(updateCurrentPage(1));
          }
          dispatch(updateLocationData(responseFromLoc.results));
        }
        break;

      case "/character":
        const makeReqToChar = await fetch(
          `https://rickandmortyapi.com/api/character?name=${characterName}&status=${characterStatus}&species=${characterSpecies}&gender=${characterGender}&page=${currentPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseFromChar = await makeReqToChar.json();
        if (responseFromChar.error) {
          dispatch(updateCharacterData([]));
        } else {
          dispatch(updateTotalPage(responseFromChar.info.pages));
          if (responseFromChar.info.prev === null) {
            dispatch(updateCurrentPage(1));
          }
          dispatch(updateCharacterData(responseFromChar.results));
        }
        break;

      case "/episode":
        const makeReqToEpi = await fetch(
          `https://rickandmortyapi.com/api/episode?name=${episodeName}&episode=${episodeCode}&page=${currentPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseFromEpi = await makeReqToEpi.json();
        console.log(responseFromEpi);
        if (responseFromEpi.error) {
          dispatch(updateEpisodeData([]));
        } else {
          dispatch(updateTotalPage(responseFromEpi.info.pages));
          if (responseFromEpi.info.prev === null) {
            dispatch(updateCurrentPage(1));
          }
          dispatch(updateEpisodeData(responseFromEpi.results));
        }
        break;
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, [
    characterName,
    characterGender,
    characterStatus,
    characterSpecies,
    locationName,
    locationDimension,
    locationType,
    episodeName,
    episodeCode,
    currentPage,
    location.pathname,
  ]);

  return (
    <>
      <div className="search-bar-sec">
        <input
          type="search"
          placeholder="Search ..."
          className="search-bar"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
