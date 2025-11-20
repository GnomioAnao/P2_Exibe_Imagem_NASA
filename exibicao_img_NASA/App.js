import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, TextInput, Linking } from 'react-native';

export default function App() {

  const [foto, setFoto] = useState('')
  const [fotos, setFotos] = useState([])
  const [anos, setAnos] = useState([])

const abrirLinkedIn1 = () => {
  Linking.openURL('https://www.linkedin.com/in/caio-lima-da-cruz-338850337/')
}

const abrirLinkedIn2 = () => {
  Linking.openURL('https://www.linkedin.com/in/isabel-santos-marques-517198223/')
}

const abrirLinkedIn3 = () => {
  Linking.openURL('www.linkedin.com/in/caio-lima-da-cruz-338850337')
}

  return (
    <View style={styles.container}>
      {/* <FlatList>
        <Text>Fotos do Dia</Text>
        //<ListHeaderComponent> para as fotos do dia
      </FlatList> */}
      <TextInput
        style={styles.input}
        value={foto}
        onChangeText={setFoto}
        placeholder='Digite o que deseja buscar(exemplos: moon, earth etc)'
      />


      <Pressable style={styles.botao}>
        {/* onPress={busca} */}
        <Text style={{ color: 'white' }}>Ao infinito, e além...</Text>
      </Pressable>

      <View style={styles.containerAno}>
        {['2020', '2021', '2022', '2023', '2024'].map(ano => (
          <Pressable key={ano} style={styles.botaoAno}>
            <Text style={{ color: 'white' }}>{ano}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.botao}>
        <Text style={{ color: 'white' }}>2025</Text>
      </Pressable>

      <View style={styles.footer}>
        <Pressable onPress={abrirLinkedIn1}>
          <FontAwesome5 name='user-astronaut' size={30} color='white'/>
        </Pressable>
        <Pressable onPress={abrirLinkedIn2}>
          <MaterialCommunityIcons name="space-invaders" size={30} color="white" />
        </Pressable>
        <Pressable onPress={abrirLinkedIn3}>
          <FontAwesome6 name="space-awesome" size={30} color="white" />
        </Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032a0',
    alignItems: 'center',
  },

  list: {
    width: '70%',
    marginTop: 12,
  },

  input: {
    marginTop: 50,
    width: '60%',
    borderColor: '#e4002b',
    borderWidth: 4,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 20,
    padding: 12,
    color: 'white',
  },

  containerAno: {
    flexDirection: 'row',
  },

  botao: {
    width: '60%',
    backgroundColor: '#e4002b',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#001b44',
    borderWidth: 4,
  },

  botaoAno: {
    backgroundColor: '#001b44',
    borderWidth: 2,
    borderColor: '#e4002b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 10,
    marginVertical: 8,
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    padding: 14,
    backgroundColor: '#001b44',
    borderTopWidth: 2,
    borderColor: '#e4002b',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    position: 'absolute',
    bottom: 0,

  },
});
