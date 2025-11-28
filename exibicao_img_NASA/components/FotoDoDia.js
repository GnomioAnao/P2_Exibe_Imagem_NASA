import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native'

export default function FotoDoDia({ fotosDia, formatarDataBR, iniciarCarregamento }) {

  return (
    <View style={styles.fotoDia}>
      <Text style={styles.tituloDia}>Foto Astronômica do Dia</Text>
      {fotosDia.length > 0 && (
        <ScrollView
          horizontal
          contentContainerStyle={styles.secaoFotoDia}>


          {fotosDia.map((foto, index) => (
            <View key={`${foto.date}-${index}`} style={styles.cardFotoDia}>
              <Image source={{ uri: foto.url }} style={styles.imagemFotoDia} />
              <Text style={styles.dataFotoDia}>{formatarDataBR(foto.date)}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  fotoDia: {
    width: '90%',
    marginTop: 40,
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 252, 251, 0.1)',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#EB455F',
    alignItems: 'center',
  },
  tituloDia: {
    color: '#FFFCFB',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  secaoFotoDia: {
    width: '100%',
    marginTop: 10,
  },
  cardFotoDia: {
    backgroundColor: 'rgba(255, 252, 251, 0.95)',
    borderRadius: 12,
    padding: 12,
    width: 180,
    marginRight: 12,
    alignItems: 'center',
  },
  imagemFotoDia: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  dataFotoDia: {
    color: '#EB455F',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
})
