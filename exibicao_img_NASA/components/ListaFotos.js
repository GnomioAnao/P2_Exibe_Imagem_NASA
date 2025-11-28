import { View, FlatList, Image, Text, StyleSheet } from 'react-native'

export default function ListaFotos({ fotos }) {
  return (
    <FlatList
      data={fotos}
      style={{ marginTop: 20, width: "100%" }}
      keyExtractor={(index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-evenly' }}
      scrollEnabled={false}
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
              <Text style={styles.descricao}>
                {item.data[0].description}
              </Text>
            )}
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  fotos: {
    flex: 2,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
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
  }
})
