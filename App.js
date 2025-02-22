import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@react-navigation/native';
import { MySearchProvider } from './context/Search';
import { MyRentedProvider } from './context/Rented';
import HomeScreen from './screens/HomeScreen';
import RentedScreen from './screens/RentedScreen';
import WatchScreen from './screens/WatchScreen';
import { theme, navigationStyle, styled } from './theme/theme';
import { Text, Pressable } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <MySearchProvider>
        <MyRentedProvider>
          <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={navigationStyle}
            >
              <Stack.Screen name="Home" 
              component={HomeScreen} 
              options={({ navigation }) => ({
                title: 'Home',
                headerRight: () => (
                  <Pressable onPress={() => navigation.navigate('Rented')}>
                    <Text style={styled.navBarText}>Rented</Text>
                  </Pressable>
                ),
              })}
              />
              <Stack.Screen name="Rented" 
              component={RentedScreen} 
              options={{ title: 'Rented Movies' }}
              />
              <Stack.Screen name="Watch" 
              component={WatchScreen}
              options={({ route }) => ({
                title: route.params?.movTitle || 'Watch'
              })}
               />
            </Stack.Navigator>
          </NavigationContainer>
        </MyRentedProvider>
      </MySearchProvider>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
