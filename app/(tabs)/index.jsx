import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={ styles.container }
    >
      
      <Text style={styles.text}>
        Edit app/index.tsx to edit this screena.
        {'\n'}
        <Link href="/test">
          <Text style={ styles.button }>Go to test screen</Text>
        </Link>
        {'\n'}
        <Link href="/test2">
          <Text style={ styles.button }>Go to test2 screen</Text>
        </Link>
      </Text>
      
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#0f0',
    },
  })

