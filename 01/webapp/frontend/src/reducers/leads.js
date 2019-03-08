import { GET_LEADS, DELETE_PLAYER } from "../actions/types.js";
const initialState = {
    players: []
}

export default function(state =initialState, action){
  switch(action.type){
        case GET_LEADS:
        return {
            ...state,
            players: action.payload
        };
        case DELETE_PLAYER:
        return{
          ...state,
          leads: state.players.filter(player=>player.id !== action.payload)
        }
        default:
        return state;
  }
}
