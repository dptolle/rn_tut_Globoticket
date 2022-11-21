import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home, {HomeProps} from './Home';
import Tickets from './Ticket';

const Stack:any = createStackNavigator();
function App() {
  return (
    <>
      <StatusBar style="auto" hidden/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerMode:'screen'
          }}

        >
          <Stack.Screen
          name='Home'
          options={{
            headerShown: false
          }}
          >
            { (props: HomeProps) => <Home {...props} username="A Sports Fan"></Home>}
          </Stack.Screen>
          <Stack.Screen
          name='Tickets'
          component={Tickets}
          options={{
            headerTitleAlign:'center'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default registerRootComponent(App);
