import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function App1() {
  let [greeting, setGreeting] = useState('Hello');

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
    </View>
  );
}

class App2 extends React.Component {
  constructor() {
    super();
    this.state = { greeting: 'Hello '}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.greeting}</Text>
      </View>
    );
  }
}

function App3() {
  let [greeting, setGreeting] = useState("Hello");
  let [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Text>You've pressed the button {counter} times!</Text>
      <Button
        title="More!"
        onPress={()=>{
          setCounter(counter + 1);
        }}
      />
    </View>
  );
}

function App4() {
  let [greeting, setGreeting] = useState("Hello");
  let [counter, setCounter] = useState(100);

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Text>You've pressed the button {counter} times!</Text>
      <Button
        title="More!"
        onPress={()=>{
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Less!"
        onPress={()=>{
          setCounter(counter - 1);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default App1;
//export default App2;
//export default App3;
export default App4;

