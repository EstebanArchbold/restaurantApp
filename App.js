import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashScreen from 'react-native-splash-screen'

import NuevaOrden from './src/views/NuevaOrden'
import Menu from './src/views/Menu'
import DetallePlato from './src/views/DetallePlato'
import FormularioPlato from './src/views/FormularioPlato'
import ResumenPedido from './src/views/ResumenPedido'
import ProgresoPedido from './src/views/ProgresoPedido'
import OnboardingScreen from './src/views/OnboardingScreen'

import Login from './src/authFirebase/login'
import Signup from './src/authFirebase/signup'


// Componertes, el boton para ir alresumen de pedido
import BotonResumen from './src/components/ui/BotonResumen'

// importar state de context
import FirebaseState from './src/context/firebase/firebaseState'
import PedidoState from './src/context/pedidos/pedidosState'

const Stack = createStackNavigator()

const App = () => {

  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide()
  })
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else {
    return (
      <>
        <FirebaseState>
          <PedidoState>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: "#FFDA00",
                  },
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerTintColor: "#000",
                }}
              >
                {isFirstLaunch && (
                  <Stack.Screen
                    name="OnboardingScreen"
                    component={OnboardingScreen}
                    options={{
                      title: "Restaurant",
                    }}
                  />
                )}
                <Stack.Screen
                  name="NuevaOrden"
                  component={NuevaOrden}
                  options={{
                    title: "New Order",
                  }}
                />
                <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{
                    title: "Restaurant",
                    headerRight: props => <BotonResumen />
                  }}
                />
                <Stack.Screen
                  name="DetallePlato"
                  component={DetallePlato}
                  options={{
                    title: null
                  }}
                />

                <Stack.Screen
                  name="FormularioPlato"
                  component={FormularioPlato}
                  options={{
                    title: "My Order"
                  }}
                />

                <Stack.Screen
                  name="ResumenPedido"
                  component={ResumenPedido}
                  options={{
                    title: "Order Summary"
                  }}
                />

                <Stack.Screen
                  name="ProgresoPedido"
                  component={ProgresoPedido}
                  options={{
                    title: "Order Progress"
                  }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{
                    title: "Login"
                  }}
                />

                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{
                    title: "Sign Un"
                  }}
                />

              </Stack.Navigator>
            </NavigationContainer>
          </PedidoState>
        </FirebaseState>
      </>
    );
  }
};

export default App;
