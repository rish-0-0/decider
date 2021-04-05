import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoundButton from '../Components/RoundButton';

interface PlaygroundProps {}

const Playground: React.FC<PlaygroundProps> = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoundButton
        backgroundColor="yellow"
        diameter={50}
        style={styles.fab}
        onPress={() => {
          console.log('Button Press');
        }}>
        <Ionicons name="ios-add-sharp" size={27} color={'#000'} />
      </RoundButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
});

export default Playground;
