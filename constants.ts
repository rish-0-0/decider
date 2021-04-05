export interface PlayerAction {
  type: PlayerActionTypes;
  payload?: any;
}

export enum PlayerActionTypes {
  INITIALIZE_USER = "INITIALIZE_USER",
  ADD_PLAYER = "ADD_PLAYER",
  REMOVE_PLAYER = "REMOVE_PLAYER",
  UPDATE_PLAYER = "UPDATE_PLAYER",
  UPDATE_USER = "UPDATE_USER"
}