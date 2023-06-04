import { View, StyleSheet, FlatList } from 'react-native'
import { StyledText } from './StyledText'
import { GROUPS } from '../mocks/fake-data'
import { GroupCard } from './GroupCard'

export const Main = () => {
  return (
    <View style={styles.container}>
      <StyledText size='title' weight='bold'>Cuentas Claras</StyledText>
      <View style={{ flex: 1 }}>
        <StyledText color='secondary'>Grupos</StyledText>
        <FlatList data={GROUPS} renderItem={
          ({ item }) => <GroupCard group={item} />
        } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818'
  }
})
