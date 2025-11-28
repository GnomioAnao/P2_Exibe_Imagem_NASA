import { View, Text, Pressable, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons'

export default function Footer({ abrirLinkedIn1, abrirLinkedIn2, abrirLinkedIn3 }) {
  return (
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
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#11468F',
    borderTopWidth: 2,
    borderColor: '#EB455F',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 30,
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
})
