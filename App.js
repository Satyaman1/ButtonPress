
import React from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  let state = 10
  const testFunction = () => {
    console.warn("Fuctoion Called")
  }

  const helloFunction = () => {
    console.warn("Hello i m second Fuctoion")
  }

  const passingValueWithFunction = (val) => {
    console.warn(val)
  }

  const getStateData = () => {
    state = 20
    console.warn(state)
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Button on press</Text>
      <Button color={'green'} title='On press' onPress={testFunction} />

      <Button color={'blue'} title='Second way to call function' onPress={() => helloFunction()} />

      <Text style={{ fontSize: 16 }} color='black'>passing value with function</Text>
      <Button color={'blue'} title='click to get value' onPress={() => passingValueWithFunction(14)} />

      <Button color={'red'} title='click to get value 2' onPress={() => passingValueWithFunction("Satya")} />

      <Text style={{ fontSize: 30 }}>state data: {state}</Text>

      <Button color={'green'} title='On press to get the value of state key' onPress={getStateData} />

    </View>
  );
};


export default App;
