import { nanoid } from 'nanoid';
import { PlayerAction, PlayerActionTypes } from '../constants';
interface Player {
  username: string;
  skill?: number;
  experience?: number;
  lfgs?: number;
  name?: string;
};
interface Players extends Array<Player>{};

interface PlayerReducer {
  players: Players; // Array of Player 
  user: Player;
}

const initState: PlayerReducer = {
  players: [],
  user: {
    username: nanoid(10),
  },
};

export default function (state = initState, action: PlayerAction) : PlayerReducer {
  switch(action.type) {
    case PlayerActionTypes.INITIALIZE_USER:
      return {
        ...state,
        user: {
          username: action.payload?.username,
        }
      };
    default:
      return state;
  }
}

