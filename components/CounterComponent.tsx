import React from 'react';
import { StyleSheet, Text } from 'react-native';

type CounterProps = {
  counter: number;
};

export const CounterComponent = (props: CounterProps) => {
    return <Text style={styles.counter}>{props.counter}</Text>;
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
