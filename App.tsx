/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ButtonComponent} from './components/ButtonComponent';
import {CounterComponent} from './components/CounterComponent';

function App(): React.JSX.Element {
  const [counter, setCounter] = React.useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const handleChange = (event: any) => {
    const inputText = event.nativeEvent.text;
    if (!isNaN(inputText) && inputText !== '') {
      setCounter(parseInt(inputText, 10));
    } else {
      setCounter(0);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          onChange={handleChange}></TextInput>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.transparent,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <View style={styles.button}>
            <ButtonComponent
              press={() => setCounter(counter + 1)}
              title="increment"
            />
          </View>
          <CounterComponent counter={counter} />
          <View style={styles.button}>
            <ButtonComponent
              press={() => setCounter(counter - 1)}
              title="decrement"
            />
          </View>
        </View>
        {counter != 0 && (
          <View style={styles.container}>
            <ButtonComponent title="Reset" press={() => setCounter(0)} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 40,
    margin: 12,
    backgroundColor: 'white',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    width: 100,
  },
  container: {
    paddingHorizontal: 100,
  },
});

export default App;
