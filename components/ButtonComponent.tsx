import React from 'react';
import { Button } from 'react-native';

type ButtonProps = {
    title: string;
    press: () => void;
}

export const ButtonComponent = (props: ButtonProps) => {
    const HandlerPress = () => {
        props.press();
    }
  return (
      <Button
        onPress={HandlerPress}
        title={props.title}></Button>
  );
};      