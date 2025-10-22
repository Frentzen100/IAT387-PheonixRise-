import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

//Import screens
import Resilience from './screens/resilience/resilience';
import DailyGratitude from './screens/resilience/dailyGratitude';
import Congratulation from './screens/resilience/congratulation';
import TryAgain from './screens/resilience/tryAgain';
import Tutorial from './screens/resilience/tutorial';
import CreateAccount from './screens/resilience/createAccount';


//Draft screen
import TestResilience from './screens/resilience/testResilience';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount" screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Tutorial" component={Tutorial} />
          <Stack.Screen name="DailyGratitude" component={DailyGratitude} />
          <Stack.Screen name="Resilience" component={Resilience} />
          <Stack.Screen name="TryAgain" component={TryAgain} />
          <Stack.Screen name="Congratulation" component={Congratulation} />

         <Stack.Screen name="TestResilience" component={TestResilience} />

      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

