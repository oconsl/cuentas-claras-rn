import { View, StyleSheet, TouchableHighlight, ToastAndroid } from 'react-native'
import { StyledText } from './StyledText'

export const GroupCard = ({ group }) => {
  const handlePress = () => {
    ToastAndroid.show(`Grupo ${group.name} presionado`, ToastAndroid.SHORT)
  }

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.container}>
        <StyledText color='secondary' weight='bold' size='title'>{group.name}</StyledText>
        <StyledText weight='bold'>{group.members}</StyledText>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#fafafa',
    borderWidth: 2,
    padding: 40,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    backgroundColor: '#303030',
    alignItems: 'center'
  }
})
