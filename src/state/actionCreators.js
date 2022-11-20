import axios from 'axios';

export const getJobs = () => {
  return async function (dispatch) {
    dispatch({ type: 'GET_JOBS_PENDING' });

    try {
      const response = await axios.get(process.env.REACT_APP_URL);
      dispatch({
        type: 'GET_JOBS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_JOBS_FAILED',
        payload: error,
      });
    }
  };
};

export const findJobs = (jobDesc, location) => {
  return async function (dispatch) {
    dispatch({ type: 'FIND_JOBS_PENDING' });

    try {
      const response = await axios.get(process.env.REACT_APP_URL, {
        params: {
          descripton: jobDesc,
          location: location,
        },
      });
      dispatch({
        type: 'FIND_JOBS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_JOBS_FAILED',
        payload: error,
      });
    }
  };
};
