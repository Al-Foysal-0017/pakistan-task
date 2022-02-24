import { TEST_REDUX_3 } from "../types";
const initialState = { data: "NAIEM", loading: true, error: null };
export const testReducer3 = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEST_REDUX_3:
      return {
        ...prevState,
        loading: false,
        data: payload,
      };
    default:
      return prevState;
  }
};
