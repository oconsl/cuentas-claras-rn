import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Main } from './src/components/Main'
import expoConstants from 'expo-constants'

export default function App () {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    paddingTop: expoConstants.statusBarHeight
  }
})
