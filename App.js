import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Hello, I am Shadi!</Text>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
}

export default App;