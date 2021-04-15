import {
  PlayerAction,
  PlayerActionTypes,
  Player,
  Players,
} from '../../constants';

interface PlayerReducer {
  players: Players; // Array of Player
  user: Player;
}

const initState: PlayerReducer = {
  players: [],
  user: {
    name: 'Rishabh Anand',
    skill: 5,
    experience: 5,
    lfws: 'WWWWW',
    username: 'my-id',
  },
};

export default function (
  state = initState,
  action: PlayerAction,
): PlayerReducer {
  switch (action.type) {
    case PlayerActionTypes.INITIALIZE_USER:
      return {
        ...state,
        user: {
          username: action.payload?.username,
        },
      };
    default:
      return state;
  }
}
