import axios from "axios";

export const GET_CARS = "GET_CARS";

// comment
export const ADD_COMMENT = "ADD_COMMENT ";

export const getCars = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/car/`)
      .then((res) => {
        dispatch({ type: GET_CARS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addComment = (userId, commenterId, commenterPseudo, text) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/car/comment-car/${userId}`,
      data: { commenterId, commenterPseudo, text },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { userId } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
