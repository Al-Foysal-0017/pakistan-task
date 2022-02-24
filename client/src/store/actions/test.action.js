import { TEST_REDUX_3 } from "../types";
export const test3 = (data) => async (dispatch) => {
  // console.log("MY DATA:>> ", data);
  try {
    dispatch({
      type: TEST_REDUX_3,
      payload: data,
    });
  } catch (error) {}
};
