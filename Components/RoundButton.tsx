import * as React from 'react';
import {Text, Pressable} from 'react-native';

interface RoundButtonProps {
  onPress: () => void;
  diameter: number;
  backgroundColor: string;
  padding?: number;
  borderRadius?: number;
  style?: {
    position?: 'absolute' | 'relative';
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    flex?: number;
    justifyContent?: 'center';
    alignItems?: 'center';
  };
}

const RoundButton: React.FC<RoundButtonProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => [
        {
          borderRadius: props.borderRadius || props.diameter / 2,
          width: props.diameter,
          height: props.diameter,
          backgroundColor: props.backgroundColor,
          display: 'flex',
          ...props.style,
        },
      ]}>
      {props.children}
    </Pressable>
  );
};

export default RoundButton;
