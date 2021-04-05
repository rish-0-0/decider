import * as React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import RoundButton from '../Components/RoundButton';

interface PeopleProps {}

const People: React.FC<PeopleProps> = props => {
  return (
    <ScrollView>
      <RoundButton
        backgroundColor="red"
        borderRadius={8}
        diameter={20}
        onPress={() => {}}>
        <Text style={{textAlign: 'center'}}>+</Text>
      </RoundButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
});

export default People;
