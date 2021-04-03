import {HistoryCollection} from './db';

interface HistoryDoc {}

async function createHistoryDoc(doc: HistoryDoc): Promise<boolean> {
  try {
    await HistoryCollection.insertAsync(doc);
    return true;
  } catch (e) {
    console.error('Error while creating a history doc', e);
    return false;
  }
}

async function updateHistoryDoc(
  finder: HistoryDoc,
  updater: HistoryDoc,
): Promise<boolean> {
  try {
    await HistoryCollection.updateAsync(finder, updater);
    return true;
  } catch (e) {
    console.error('Error while updating history doc', e);
    return false;
  }
}

async function getHistoryDoc(finder: HistoryDoc): Promise<boolean> {
  try {
    await HistoryCollection.findAsync(finder);
    return true;
  } catch (e) {
    console.error('Error while finding history doc', e);
    return false;
  }
}

export {createHistoryDoc, updateHistoryDoc, getHistoryDoc};
