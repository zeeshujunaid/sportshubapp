import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Stack>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
        <Stack.Screen name="index" options={{ headerShown: false, }} />
        <Stack.Screen name="signup" options={{ headerShown: false, }} />
        <Stack.Screen name="login" options={{ headerShown: false, }} />
        <Stack.Screen name="home" options={{ headerShown: false, }} />
      </GestureHandlerRootView>
    </Stack>
  );
}
