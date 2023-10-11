import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/tourReducer";
import { fetchTours, fetchAudio } from "../actions/tourAction";
const initialState = {
  tours: [],
  toursLoading: false,
  toursError: false,
  audio: [],
  audioLoading: false,
  audioError: false,
  singleAudio: [],
  singleAudioLoading: false,
  singleAudioError: false,
};

const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchTours(dispatch);
  }, []);
  useEffect(() => {
    fetchAudio(dispatch);
  }, []);

  return (
    <TourContext.Provider
      value={{ ...state, dispatch, fetchTours, fetchAudio }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTourContext = () => {
  return useContext(TourContext);
};
