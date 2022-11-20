const initialState = {
  loading: true,
  data: [],
  error: false,
};

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_JOBS_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_JOBS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'GET_JOBS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'FIND_JOBS_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'FIND_JOBS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FIND_JOBS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
