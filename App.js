import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "./constants/";
import { SCREENS } from "./constants/messages";

import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import CartScreen from "./screens/CartScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// TODO: Move stacks to file
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        contentStyle: { backgroundColor: COLORS.lightWhite },
      }}
    >
      <Stack.Screen name={SCREENS.LOGIN.name} component={LoginScreen} />
    </Stack.Navigator>
  );
}

function ProductsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        contentStyle: { backgroundColor: COLORS.lightWhite },
      }}
    >
      <Stack.Screen name={SCREENS.PRODUCTS.name} component={ProductsScreen} />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAIL.name}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        contentStyle: { backgroundColor: COLORS.lightWhite },
      }}
    >
      <Stack.Screen name={SCREENS.CART.name} component={CartScreen} />
      <Stack.Screen name={SCREENS.CHECKOUT.name} component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        contentStyle: { backgroundColor: COLORS.lightWhite },
      }}
    >
      <BottomTab.Screen
        name={SCREENS.PRODUCTS_STACK.name}
        component={ProductsStack}
        options={{
          title: SCREENS.PRODUCTS.title,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={SCREENS.CART_STACK.name}
        component={CartStack}
        options={{
          title: SCREENS.CART.title,
          headerShown: false,
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
  // const [dbInitialized, setDbInitialized] = useState(false);

  // useEffect(() => {
  //   const prepare = async () => {
  //     try {
  //       await SplashScreen.preventAutoHideAsync();
  //       init();
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setDbInitialized(true);
  //     }
  //   };
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (dbInitialized) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [dbInitialized]);

  // if (!dbInitialized) return null;

  return (
    <>
      <StatusBar style='light' />
      <Navigation />
    </>
  );
}
