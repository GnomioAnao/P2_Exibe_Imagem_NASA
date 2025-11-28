import { View, Pressable, Text, StyleSheet } from 'react-native'

export default function FiltroAno({ buscarAno }) {
  const anos = ['2020', '2021', '2022', '2023', '2024', '2025']

  return (
    <View style={styles.containerAno}>
      {anos.map((ano) => (
        <Pressable
          key={ano}
          style={styles.botaoAno}
          onPress={() => buscarAno(ano)}
        >
          <Text style={{ color: '#11468F' }}>{ano}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  containerAno: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botaoAno: {
    backgroundColor: '#FFFCFB',
    borderWidth: 2,
    borderColor: '#EB455F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
})
