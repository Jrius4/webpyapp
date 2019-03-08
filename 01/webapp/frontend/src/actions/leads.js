import axios from "axios";
import { GET_LEADS, DELETE_PLAYER, ADD_PLAYER } from "./types";

//GET PLAYERS
export const getLeads = () => dispatch => {
  axios
    .get("/api/players/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE PLAYERS
export const deleteplayer = id => dispatch => {
  axios
    .delete(`/api/players/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PLAYER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
