const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import INICIAL from "./screens/INICIAL";
import PERFIL from "./screens/PERFIL";
import Frame from "./components/Frame";
import PhoneCall from "./components/PhoneCall";
import LIGAES from "./screens/LIGAES";
import CONVERSAS from "./screens/CONVERSAS";
import REGISTRESE from "./screens/REGISTRESE";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
    "InriaSerif-Regular": require("./assets/fonts/InriaSerif-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="INICIAL"
              component={INICIAL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PERFIL"
              component={PERFIL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LIGAES"
              component={LIGAES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CONVERSAS"
              component={CONVERSAS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="REGISTRESE"
              component={REGISTRESE}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
