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
  FETCH_SINGLE_AUDIO_ERROR,
} from "../actions/actions";

const tourReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TOURS_BEGIN:
      return {
        ...state,
        toursLoading: true,
      };
    case FETCH_TOURS_SUCCESS:
      return {
        ...state,
        toursLoading: false,
        tours: action.payload,
      };
    case FETCH_TOURS_ERROR:
      return {
        ...state,
        toursLoading: false,
        toursError: true,
      };
    case FETCH_SINGLE_TOUR_BEGIN:
      return {
        ...state,
        singleTourLoading: true,
      };
    case FETCH_SINGLE_TOUR_SUCCESS:
      return {
        ...state,
        singleTourLoading: false,
        singleTour: action.payload,
      };
    case FETCH_SINGLE_TOUR_ERROR:
      return {
        ...state,
        singleTourError: true,
      };
    case FETCH_AUDIO_BEGIN:
      return {
        ...state,
        singleAudioLoading: true,
      };
    case FETCH_AUDIO_SUCCESS:
      return {
        ...state,
        audioLoading: false,
        audio: action.payload,
      };
    case FETCH_AUDIO_ERROR:
      return {
        ...state,
        audioError: true,
      };
    case FETCH_SINGLE_AUDIO_BEGIN:
      return {
        ...state,
        singleAudioLoading: true,
      };
    case FETCH_SINGLE_AUDIO_SUCCESS:
      return {
        ...state,
        singleAudioLoading: false,
        singleAudio: action.payload,
      };
    case FETCH_SINGLE_AUDIO_ERROR:
      return {
        ...state,
        singleAudioError: true,
      };
    default:
      return state;
  }
};

export default tourReducer;
