import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/home/index';
import TalkWithAqua from './src/components/talk-with-aqua/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen
          name="TalkWithAqua"
          component={TalkWithAqua}
          options={{ title: 'Talk with Aqua' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
