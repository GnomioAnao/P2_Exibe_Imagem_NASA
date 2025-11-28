import { ScrollView, View, StyleSheet} from 'react-native'
import { useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import FotoDoDia from './components/FotoDoDia'
import Busca from './components/Busca'
import FiltroAno from './components/FiltroAno'
import ListaFotos from './components/ListaFotos'
import Footer from './components/Footer'

export default function App() {

  const [busca, setBusca] = useState('')
  const [fotos, setFotos] = useState([])
  const [fotosDia, setFotosDia] = useState([])
  const [limiteResultados] = useState(10)

  const formatarDataBR = (dataISO) => {
    const [ano, mes, dia] = dataISO.split('-')
    return `${dia}/${mes}/${ano}`
  }

 const buscar = async () => {
  if (busca === '') return
  const resposta = await fetch(`http://localhost:3000/search?termo=${busca}`)
  const dados = await resposta.json()

  const limitados = dados.items.filter((_, l) => l < limiteResultados)

  setFotos(limitados)
}

  const buscarAno = async (ano) => {
    const resposta = await fetch(`http://localhost:3000/search-year?ano=${ano}`)
    const dados = await resposta.json()

    const limitados = dados.items.filter((_, l) => l <limiteResultados)
    
    setFotos(limitados)
  }

  const buscarFotoDoDia = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/apod')
      const dados = await resposta.json()

      if (dados.media_type !== "image") return 

      return {
        url: dados.url,
        date: dados.date,
      }
    } catch {
      return 
    }
  }

  const buscarTresDiasAnteriores = async () => {
    const resposta = await fetch("http://localhost:3000/apod-3")
    return await resposta.json()
  }

  const salvarFotosDiaNoStorage = async (fotos) =>
    await AsyncStorage.setItem('@fotos_do_dia', JSON.stringify(fotos))

  const carregarFotosDiaDoStorage = async () => {
    const fotosJSON = await AsyncStorage.getItem('@fotos_do_dia')
    if (!fotosJSON) return false
    setFotosDia(JSON.parse(fotosJSON))
    return true
  }

 const iniciarCarregamento = async () => {
  const carregado = await carregarFotosDiaDoStorage()
  if (!carregado) {
    const todas = []

    const hoje = await buscarFotoDoDia()
    if (hoje) todas.push(hoje)

    const anteriores = await buscarTresDiasAnteriores()
    todas.push(...anteriores)

    setFotosDia(todas)
    await salvarFotosDiaNoStorage(todas)
  }
}

  useState(() => {
    iniciarCarregamento()
    return []
  })


  const abrirLinkedIn1 = () => Linking.openURL('https://www.linkedin.com/in/alicia-muniz-dev/')
  const abrirLinkedIn2 = () => Linking.openURL('https://www.linkedin.com/in/isabel-santos-marques-517198223/')
  const abrirLinkedIn3 = () => Linking.openURL('https://www.linkedin.com/in/caio-lima-da-cruz-338850337')

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        <FotoDoDia fotosDia={fotosDia} formatarDataBR={formatarDataBR} iniciarCarregamento={iniciarCarregamento}/>
       
        <Busca busca={busca} setBusca={setBusca} buscar={buscar} />

        <FiltroAno buscarAno={buscarAno} />

        <ListaFotos fotos={fotos} />

        <Footer 
          abrirLinkedIn1={abrirLinkedIn1}
          abrirLinkedIn2={abrirLinkedIn2}
          abrirLinkedIn3={abrirLinkedIn3}
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#11468F',
  },
  container: {
    flex: 1,
    backgroundColor: '#11468F',
    alignItems: 'center',
  }
})
