import { GET_CARS } from "../actions/car.actions";

const initialState = {};

export default function carReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return action.payload;

    default:
      return state;
  }
}
