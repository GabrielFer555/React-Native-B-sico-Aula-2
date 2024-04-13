import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message'
import Cadastro from './src/components/cadastro';
import { View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './src/components/home';
import NameType from './src/components/nameType';
import styles from './src/styles/style';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name ='home' component={Home}/>
              <Stack.Screen name ='nomecompleto' component={NameType}/>
              <Stack.Screen name ='cadastro' component={Cadastro}/>
            </Stack.Navigator>
        <Toast/>
        </NavigationContainer>
    </View>
  );
}
