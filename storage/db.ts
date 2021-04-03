import DataStore from 'react-native-local-mongodb';

const HistoryCollection = new DataStore({
  filename: 'DeciderHistory',
  autoload: true,
});
const PlayerCollection = new DataStore({
  filename: 'DeciderPlayers',
  autoload: true,
});

export {HistoryCollection, PlayerCollection};
