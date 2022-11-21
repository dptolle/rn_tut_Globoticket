import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Home from './Home';

function App() {
  return (
    <>
      <StatusBar style="auto" hidden/>
      <Home username="A Sports Fan"></Home>
    </>
  );
}


export default registerRootComponent(App);
