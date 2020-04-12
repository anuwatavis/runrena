export const limitActivityQuery = (data) => {
  console.log("limitActivityQuery -> data", data);
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: "LIMIT_QUERY", data });
  };
};
