import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { useState} from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, TextInput, Linking, Image } from 'react-native';

export default function App() {

  const [busca, setBusca] = useState('')
  const [fotos, setFotos] = useState([])
  const [fotosDia, setFotosDia] = useState([])

  const abrirLinkedIn1 = () => {
    Linking.openURL('https://www.linkedin.com/in/alicia-muniz-dev/')
  }

  const abrirLinkedIn2 = () => {
    Linking.openURL('https://www.linkedin.com/in/isabel-santos-marques-517198223/')
  }

  const abrirLinkedIn3 = () => {
    Linking.openURL('https://www.linkedin.com/in/caio-lima-da-cruz-338850337')
  }


  const buscar = async () => {
    if (busca === '') return
    const resposta = await fetch(`http://localhost:3000/search?termo=${busca}`)
    const dados = await resposta.json()

    const resultados = dados.items || []
    setFotos(resultados)
  }

  const buscarAno = async (ano) => {
    const resposta = await fetch(`http://localhost:3000/search-year?ano=${ano}`)
    const dados = await resposta.json()

    const resultados = dados.items || []
    setFotos(resultados)
  }

  return (
    <View style={styles.container}>


      <TextInput
        style={styles.input}
        value={busca}
        onChangeText={setBusca}
        placeholder='Digite o que deseja buscar (exemplos: moon, earth etc)'
      />

      <Pressable style={styles.botao} onPress={buscar}>
        <Text style={{ color: '#11468F' }}>Ao infinito, e além...</Text>
      </Pressable>

      <View style={styles.containerAno}>
        {['2020', '2021', '2022', '2023', '2024'].map((ano) => (
          <Pressable
            key={ano}
            style={styles.botaoAno}
            onPress={() => buscarAno(ano)}
          >
            <Text style={{ color: '#11468F' }}>{ano}</Text>
          </Pressable>
        ))}
        <Pressable
          style={styles.botaoAno}
          onPress={() => buscarAno('2025')}
        >
          <Text style={{ color: '#11468F' }}>2025</Text>
        </Pressable>
      </View>

  
      <FlatList
        data={fotos}
        style={{ marginTop: 20, width: "100%" }}
        keyExtractor={(index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        renderItem={({ item }) => {
          const imagem = item.links ? item.links[0].href : null

          if (!imagem) return null

          return (
            <View style={styles.fotos}>
              <Text style={styles.tituloFoto}>{item.data[0].title}</Text>
              <Image
                source={{ uri: imagem }}
                style={{ width: 300, height: 300, borderRadius: 10 }}
              />
              {item.data[0].description && (
                <Text style={styles.descricao}>{item.data[0].description}</Text>
              )}
            </View>
          );
        }}
      />

      <View style={styles.footer}>
        <View>
          <Text style={styles.tituloFooter}>Tripulantes</Text>
          
          <View style={styles.tripulantes}>
            <Pressable onPress={abrirLinkedIn1}>
              <FontAwesome5 name='user-astronaut' size={30} color='#FFFCFB' />
              <Text style={styles.nomeTripulante}>Alicia</Text>
            </Pressable>

            <Pressable onPress={abrirLinkedIn2}>
              <MaterialCommunityIcons name="space-invaders" size={30} color="#FFFCFB" />
              <Text style={styles.nomeTripulante}>Isabel</Text>
            </Pressable>

            <Pressable onPress={abrirLinkedIn3}>
              <FontAwesome6 name="space-awesome" size={30} color="#FFFCFB" />
              <Text style={styles.nomeTripulante}>Caio</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11468F',
    alignItems: 'center',
  },

  list: {
    width: '70%',
    marginTop: 12,
  },

  input: {
    marginTop: 50,
    width: '60%',
    borderColor: '#EB455F',
    borderWidth: 2,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 15,
    padding: 12,
    color: '#2B3467',
    backgroundColor: '#FFFCFB',
  },

  containerAno: {
    flexDirection: 'row',
  },

  botao: {
    width: '60%',
    backgroundColor: '#FFFCFB',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderColor: '#EB455F',
    borderWidth: 2,
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

  footer: {
    width: '100%',
    padding: 14,
    backgroundColor: '#11468F',
    borderTopWidth: 2,
    borderColor: '#EB455F',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    position: 'absolute',
    bottom: 0,
  },

  fotos: {
    flex: 2,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    alignItems: 'center'
  },


  tituloFoto: {
    color: "#FFFCFB",
    marginTop: 15,
    fontSize: 16,
    width: 300,
    textAlign: "center",
    padding: 10
  },

  descricao: {
    color: "#FFFCFB",
    marginTop: 6,
    fontSize: 14,
    width: 300,
    textAlign: "center",
    opacity: 0.8,
  },


  tituloFooter: {
    color: '#FFFCFB',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    padding: 10
  },

  tripulantes: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    
  },


  nomeTripulante: {
    color: '#FFFCFB',
    fontSize: 14,
    fontWeight: '500',
  },

});