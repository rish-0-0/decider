import * as React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Playground } from '../constants';

interface PlaygroundListItemProps {
  item: Playground;
  index: number;
}

const PlaygroundListItem: React.FC<PlaygroundListItemProps> = (props) => {
  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={styles.item}>
        {/* Identifier */}
        <View/>
        {/* Metadata */}
        <View/>
        {/* Time and Hotness */}
        <View/>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
  },

});

export default PlaygroundListItem;