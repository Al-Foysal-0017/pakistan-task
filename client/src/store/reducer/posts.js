// const postsReducer = (posts = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return action.payload;
//     case "CREATE":
//       return [...posts, action.payload];
//     default:
//       return posts;
//   }
// };

// export default postsReducer;

// const initialState = { data: [], loading: true, error: null };

export const postsReducer = (posts = [], action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
