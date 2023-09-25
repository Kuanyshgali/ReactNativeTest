import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './components/pages/Home';
import UsersPage from './components/pages/Users';
import {Modal, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './components/Module/Menu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTitleAlign: 'center',
          headerLeft: props => <Menu />,
        }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Users"
          component={UsersPage}
          options={{title: 'Users'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
