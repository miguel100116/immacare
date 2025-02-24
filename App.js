
import Registration from './components/Registration';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Appointment from './components/Appointment';
import Profile from './components/Profile';
import { Mystyle } from './components/Mystyle';
import AppointmentForm from './components/AppointmentForm';
import Login from './components/Login';
import Service from './components/Service';
import Doctors from './components/Doctors';



export default function App() {
  const SNavigation=createNativeStackNavigator();

  return (
    <NavigationContainer>
    <SNavigation.Navigator initialRouteName="Doctors">
    <SNavigation.Screen options={{ headerShown: false }} name="Login" component={Login} />
    <SNavigation.Screen options={{ headerShown: false }} name="Service" component={Service} />
    <SNavigation.Screen  options={{ headerShown: false }} name="Doctors" component={Doctors}  />
    <SNavigation.Screen  options={{ headerShown: false }} name="Profile" component={Profile}  />
      <SNavigation.Screen options={{ headerShown: false }} name="Registration" component={Registration} />
      <SNavigation.Screen  options={{ headerShown: false }} name="Dashboard" component={Appointment} />
      <SNavigation.Screen  options={{ headerShown: false }} name="Appointment" component={AppointmentForm} />
    </SNavigation.Navigator>
  </NavigationContainer>
)}


