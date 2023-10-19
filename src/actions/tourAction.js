import {
  FETCH_TOURS_BEGIN,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_ERROR,
  FETCH_SINGLE_TOUR_BEGIN,
  FETCH_SINGLE_TOUR_SUCCESS,
  FETCH_SINGLE_TOUR_ERROR,
  FETCH_AUDIO_BEGIN,
  FETCH_AUDIO_SUCCESS,
  FETCH_AUDIO_ERROR,
  FETCH_SINGLE_AUDIO_BEGIN,
  FETCH_SINGLE_AUDIO_SUCCESS,
} from "./actions";
import { tours } from "../constants";

export const fetchTours = (dispatch) => {
  try {
    dispatch({ type: FETCH_TOURS_BEGIN });
    const data = tours;
    dispatch({ type: FETCH_TOURS_SUCCESS, payload: data });

    return data;
  } catch (error) {
    dispatch({ type: FETCH_TOURS_ERROR });
    console.log("@@@error", error);
  }
};
export const fetchSingleTour = (dispatch, id) => {
  try {
    dispatch({ type: FETCH_SINGLE_TOUR_BEGIN });
    // console.log("@@@tours", tours);
    const singleTour = tours.find((tour) => {
      // console.log("@@@tour.id", tour.id);
      return tour.id === id;
    });
    if (singleTour) {
      dispatch({ type: FETCH_SINGLE_TOUR_SUCCESS, payload: singleTour });
    }
  } catch (error) {}
};

export const fetchAudio = (dispatch) => {
  try {
    dispatch({ type: FETCH_AUDIO_BEGIN });
    for (let index = 0; index < tours.length; index++) {
      const singleTour = tours[index];
      // console.log(singleTour);
      const data = singleTour.audioLists;
      dispatch({ type: FETCH_AUDIO_SUCCESS, payload: data });
      // console.log("@@@data", data);
      return data;
    }
  } catch (error) {}
};
export const fetchSingleAudio = (dispatch, id) => {
  try {
    dispatch({ type: FETCH_SINGLE_AUDIO_BEGIN });
    for (let index = 0; index < tours.length; index++) {
      const singleTour = tours[index];

      const singleAudio = singleTour.audioLists;
      // console.log("@@@singleAudio", singleAudio);
      const audioId = singleAudio.find((audio) => {
        // console.log("@@@audio.id", audio.id);

        return audio.id === +id;
      });
      if (audioId) {
        dispatch({ type: FETCH_SINGLE_AUDIO_SUCCESS, payload: audioId });
      }
    }
  } catch (error) {}
};
