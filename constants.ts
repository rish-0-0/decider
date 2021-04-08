export interface PlayerAction {
  type: PlayerActionTypes;
  payload?: any;
}

export enum PlayerActionTypes {
  INITIALIZE_USER = 'INITIALIZE_USER',
  ADD_PLAYER = 'ADD_PLAYER',
  REMOVE_PLAYER = 'REMOVE_PLAYER',
  UPDATE_PLAYER = 'UPDATE_PLAYER',
  UPDATE_USER = 'UPDATE_USER',
  GET_USER = 'GET_USER',
  GET_PLAYER = 'GET_USER',
}

export interface Player {
  username: string | null;
  skill?: number;
  experience?: number;
  lfws?: string;
  name?: string;
};
export interface Players extends Array<Player>{};

export interface PlaygroundAction {
  type: PlaygroundActionTypes;
  payload?: any;
}

export interface Playground {
  id: string;
  controller: string;
  players: Players;
  viewers: Players;
  active: true;
  createdAt: Date;
  updatedAt: Date;
}

export interface Playgrounds extends Array<Playground>{};

export enum PlaygroundActionTypes {
  INITIALIZE_PLAYGROUND = 'INITIALIZE_PLAYGROUND',
  ADD_PLAYGROUND = 'ADD_PLAYGROUND',
  REMOVE_PLAYGROUND = 'REMOVE_PLAYGROUND',
  UPDATE_PLAYGROUND = 'UPDATE_PLAYGROUND',
  GET_PLAYGROUND = 'GET_PLAYGROUND',
}
