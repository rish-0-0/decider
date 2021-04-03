import {PlayerCollection} from './db';

interface PlayerDoc {}

async function createPlayerDoc(doc: PlayerDoc): Promise<boolean> {
  try {
    await PlayerCollection.insertAsync(doc);
    return true;
  } catch (e) {
    console.error('Error while creating a Player doc', e);
    return false;
  }
}

async function updatePlayerDoc(
  finder: PlayerDoc,
  updater: PlayerDoc,
): Promise<boolean> {
  try {
    await PlayerCollection.updateAsync(finder, updater);
    return true;
  } catch (e) {
    console.error('Error while updating Player doc', e);
    return false;
  }
}

async function getPlayerDoc(finder: PlayerDoc): Promise<boolean> {
  try {
    await PlayerCollection.findAsync(finder);
    return true;
  } catch (e) {
    console.error('Error while finding Player doc', e);
    return false;
  }
}

export {createPlayerDoc, updatePlayerDoc, getPlayerDoc};
