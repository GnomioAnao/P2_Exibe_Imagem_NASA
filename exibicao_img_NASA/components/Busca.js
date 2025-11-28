import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native'

export default function Busca({ busca, setBusca, buscar }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={busca}
        onChangeText={setBusca}
        placeholder='Digite o que deseja buscar (moon, earth...)'
      />

      <Pressable style={styles.botao} onPress={buscar}>
        <Text style={{ color: '#11468F' }}>Ao infinito, e além...</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 50,
    width: '300%',
    borderColor: '#EB455F',
    borderWidth: 2,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 15,
    padding: 12,
    color: '#2B3467',
    backgroundColor: '#FFFCFB',
    alignSelf: 'center'
  },
  botao: {
    width: '300%',
    backgroundColor: '#FFFCFB',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderColor: '#EB455F',
    borderWidth: 2,
    alignSelf: 'center'
  }
})
