import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'Home'}}/>
      <Tabs.Screen name="test/index" options={{title: 'Test'}}/>
      <Tabs.Screen name="test2" options={{title: 'Test2'}}/>
    </Tabs>
  )
}
