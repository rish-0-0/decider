import {
  PlaygroundAction,
  PlaygroundActionTypes,
  Playground,
  Playgrounds,
} from '../../constants';

export interface PlaygroundReducer {
  playgrounds: Playgrounds;
  map: Map<string, number>;
}

const samples: Playgrounds = [
  {
    id: '1234',
    name: 'Title',
    controller: 'my-id',
    players: [
      {
        name: 'Rishabh Anand',
        skill: 5,
        experience: 5,
        lfws: 'WWWWW',
        username: 'my-id',
      },
      {
        name: 'Kyan',
        skill: 7,
        experience: 11,
        lfws: 'WLWLW',
        username: 'kyan',
      },
      {
        name: 'Jayanth',
        skill: 11,
        experience: 4,
        lfws: 'WWWWW',
        username: 'axel',
      },
    ],
    viewers: [
      {
        name: 'Dhruv',
        skill: 4,
        experience: 4,
        lfws: 'WLWLWL',
        username: 'chingi',
      },
    ],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const initState: PlaygroundReducer = {
  playgrounds: [...samples],
  map: new Map<string, number>(), // id to to array index map
};

export default function playgroundReducer(
  state: PlaygroundReducer = initState,
  action: PlaygroundAction,
) {
  switch (action.type) {
    default:
      return state;
  }
}
