import {
  PlaygroundAction,
  PlaygroundActionTypes,
  Playground,
  Playgrounds,
} from '../constants';

interface PlaygroundReducer {
  playgrounds: Playgrounds;
  map: Map<string,number>;
}

const initState: PlaygroundReducer = {
  playgrounds: [],
  map: new Map<string, number>(), // id to to array index map
};

export default function playgroundReducer(
  state: PlaygroundReducer = initState,
  action: PlaygroundAction,
) {
  switch (action.type) {
    case PlaygroundActionTypes.INITIALIZE_PLAYGROUND:
      return {
        ...state,
      };

    case PlaygroundActionTypes.ADD_PLAYGROUND:
      return {
        ...state,
      };

    case PlaygroundActionTypes.REMOVE_PLAYGROUND:
      return {
        ...state,
      };

    case PlaygroundActionTypes.GET_PLAYGROUND:
      return {
        ...state,
      };

    case PlaygroundActionTypes.UPDATE_PLAYGROUND:
      return {
        ...state,
      };

    default:
      return state;
  }
}
