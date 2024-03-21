import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/Tabs';
import { Provider } from 'react-redux';
import store from './stores/store';
import TradeModal from './components/TradeModal';
import CoinDetails from './screens/CoinDetails';
import ChartScreen from './screens/ChartScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'MainLayout'}
        >
          <Stack.Screen
            name="MainLayout"
            component={Tabs}
          />
          <Stack.Screen
            name="TradeModal"
            component={TradeModal}
          />
          <Stack.Screen
            name="CoinDetails"
            component={CoinDetails}
          />
          <Stack.Screen
            name="ChartScreen"
            component={ChartScreen}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;