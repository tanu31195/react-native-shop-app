import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { Colors } from "./constants/styles";
import { SCREENS } from "./constants/messages";

import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        contentStyle: { backgroundColor: Colors.lightWhite },
      }}
    >
      <Stack.Screen name={SCREENS.LOGIN.name} component={LoginScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        contentStyle: { backgroundColor: Colors.lightWhite },
      }}
    >
      <BottomTab.Screen
        name={SCREENS.PRODUCTS.name}
        component={ProductsScreen}
        options={{
          title: SCREENS.PRODUCTS.title,
        }}
      />
      <BottomTab.Screen
        name={SCREENS.CART.name}
        component={CartScreen}
        options={{
          title: SCREENS.CART.title,
        }}
      />
      <BottomTab.Screen
        name={SCREENS.USER_DETAIL.name}
        component={UserDetailScreen}
        options={{
          title: SCREENS.USER_DETAIL.title,
        }}
      />
    </BottomTab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Navigation />
    </>
  );
}
