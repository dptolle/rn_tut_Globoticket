import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home, {HomeProps} from './Home';
import Tickets from './Ticket';
import Contact from './Contact';
import TicketPurchase from './TicketPurchase';
import News from './News';

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
          <Stack.Screen
          name='Contact'
          component={Contact}
          options={{
            headerTitleAlign:'center',
            headerTitle: 'Contact Us'
          }}/>
          <Stack.Screen
          name='Purchase'
          component={TicketPurchase}
          options={{
            headerTitleAlign:'center',
            headerTitle: 'Purchase Tickets'
          }}/>
          <Stack.Screen
          name='News'
          component={News}
          options={{
            headerTitleAlign:'center',
            headerTitle: 'Latest News'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default registerRootComponent(App);
