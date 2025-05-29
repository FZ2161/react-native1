import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}}/>
      <Stack.Screen name="test/index" options={{title: 'Test'}}/>
      <Stack.Screen name="test2" options={{title: 'Test2'}}/>
    </Stack>
  )
}
