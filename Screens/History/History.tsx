import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

interface HistoryProps {

}

const History: React.FC<HistoryProps> = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Your stats</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default History;