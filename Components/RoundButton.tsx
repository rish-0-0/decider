import * as React from 'react';
import {Text, Pressable, StyleSheetProperties} from 'react-native';

interface RoundButtonProps {
  onPress: () => void;
  diameter: number;
  backgroundColor: string;
  padding?: number;
  borderRadius?: number;
  style?: StyleSheetProperties;
}

const RoundButton: React.FC<RoundButtonProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => [
        {
          padding: props.padding || 5,
          borderRadius: props.borderRadius || props.diameter / 2,
          width: props.diameter,
          height: props.diameter,
          backgroundColor: props.backgroundColor,
          ...props.style,
        },
      ]}>
      {props.children}
    </Pressable>
  );
};

export default RoundButton;
