import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text, H1, H3 } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import PedidoContext from '../context/pedidos/pedidosContext'
import firebase from '../firebase'
import Countdown from 'react-countdown'


const ProgresoPedido = () => {

  const navigation = useNavigation()

  const { idpedido, total } = useContext(PedidoContext)

  const [tiempo, guardarTiempo] = useState(0)
  const [completado, guardarCompletado] = useState(false)
  const [totalBD, setTotal] = useState('')

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db.collection('ordenes')
        .doc(idpedido)
        .onSnapshot(function (doc) {
          guardarTiempo(doc.data().tiempoentrega)
          guardarCompletado(doc.data().completado)
          setTotal(doc.data().total)
        })
    }
    obtenerProducto()
  }, [])
//console.log(total)
  // Muestra el tiempo en pantalla con Countdown
  const renderer = ({ minutes, seconds }) => {

    return (
      <Text style={styles.tiempo}>{minutes}:{seconds}</Text>
    )
  }
  return (
    <Container style={globalStyles.contenedor}>
      <View style={[globalStyles.contenido, { marginTop: 50 }]}>
        {tiempo === 0 && (
          <>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>We have received your Order ... </Text>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>We are calculating the delivery time</Text>
          </>
        )}

        {!completado && tiempo > 0 && (
          <>
            <Text style={{ textAlign: 'center' }}> Your order will be ready in:</Text>
            <Text>
              <Countdown
                date={Date.now() + tiempo * 60000}
                renderer={renderer} //muestra el tiempo que queda del pedido en la pantalla
              />
            </Text>
          </>
        )}

        {completado && (
          <>
            <H1 style={styles.textoCompletado}>Your order is ready</H1>
            <H3 style={styles.textoCompletado}>Please can you come and pick it up.</H3>
            <Text style={[styles.textoComplPrecio, { marginVertical: 40 }]}>Remember what cost of your meal was: { totalBD }$ </Text>
            <Button tyle={[globalStyles.boton, { marginTop: 200 }]}
              rounded
              block
              onPress={() => navigation.navigate("NuevaOrden")}
            >
            
              <Text style={globalStyles.botonTexto}>Exit to Menu</Text>
            </Button>
          </>
        )}
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  tiempo: {
    marginBottom: 20,
    fontSize: 60,
    textAlign: 'center',
    marginTop: 80,
  },
  textoCompletado: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20
  },
  textoComplPrecio: {
    textAlign: 'center',
    fontSize: 24,
    color: '#8E44AD'
  }
})

export default ProgresoPedido
