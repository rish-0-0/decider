import { PlayerAction, PlayerActionTypes } from '../constants';
interface Player {
  username: string | null;
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
    username: null,
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

