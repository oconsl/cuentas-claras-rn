import { Text, StyleSheet } from 'react-native'

export const StyledText = ({ children, color = 'primary', weight = 'regular', size = 'paragraph', style, ...props }) => {
  const textStyles = [
    styles[color],
    styles[weight],
    styles[size],
    style
  ]

  return (
    <Text style={textStyles} {...props}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  regular: {
    fontWeight: 'normal'
  },
  primary: {
    color: '#fafafa'
  },
  secondary: {
    color: '#1ecb85'
  },
  title: {
    fontSize: 24
  },
  paragraph: {
    fontSize: 16
  }
})
