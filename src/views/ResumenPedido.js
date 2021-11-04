import React, { useContext, useEffect } from 'react'
import {  Alert, ScrollView } from 'react-native'
import {
  Container,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
  H1
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global'
import firebase from '../firebase'

import PedidoContext from '../context/pedidos/pedidosContext'


const ResumenPedido = () => {

  const navigation = useNavigation()

  // Context del pedido realizado
  const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } = useContext(PedidoContext)
  //console.log(pedido)

  useEffect(() => {
    calcularTotal()
  }, [pedido])

  // Funcin para iterar sobre el pedido y los productos que añadimos y sus cantidades
  const calcularTotal = () => {
    let nuevoTotal = 0
    nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0)

    mostrarResumen(nuevoTotal)
  }

  // funcion para redirecionar al progreso del pedido
  const progresoPedido = () => {
    Alert.alert(
      'Check the order',
       'Once the order is placed, you will not be able to change it',
      [
        {
          text: 'Confirmar',
          onPress: async () => {

            // crear un objeto
            const pedidoObjeto = {
               tiempoentrega: 0,
               completado: false,
               total: Number(total),
               orden: pedido, //array
               creado: Date.now()
            }

           // console.log(pedidoObjeto)

            try {
              const pedido = await firebase.db.collection('ordenes').add(pedidoObjeto)
              pedidoRealizado(pedido.id)
              navigation.navigate("ProgresoPedido")
            } catch (error) {
              console.log(error)
            }            
          }
        },
        { text: 'Revisar', style: 'cancel' }
      ]
    )
  }

  // Elimina un producto del arreglo de pedido final
  const confirmaEliminar = (id) => {
    Alert.alert(
      'Do you want to delete this article ...?',
       'Once deleted you will not be able to recover it',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            // eliminar producto del state
            eliminarProducto(id)
          }
        },
        { text: 'Cancelar', style: 'cancel' }
      ]
    )

  }

  return (
    <Container style={globalStyles.contenedor}>
      <ScrollView>
      <List>
        <H1 style={globalStyles.titulo}>Product Summary</H1>
        {pedido.map((plato, i) => {
          const { cantidad, name, image, id, price } = plato
          return (
            <List key={id + i}>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail large square source={{ uri: image }} />
                </Left>
                <Body>
                  <Text> {name} </Text>
                  <Text>{cantidad} Units </Text>
                  <Text> {price}$ each unit</Text>

                  <Button
                    onPress={() => confirmaEliminar(id)}
                    full
                    danger
                    style={{ marginTop: 20 }}
                  >
                    <Text style={[globalStyles.botonTexto, { color: '#FFF' }]}>Remove</Text>
                  </Button>
                </Body>
              </ListItem>
            </List>
          )
        })}
        <Text style={globalStyles.cantidad}>Total to Pay:{total} $</Text>

        <Button
          onPress={() => navigation.navigate('Menu')}
          style={{ marginTop: 20 }}
          full
          rounded
          dark
        >
          <Text style={[globalStyles.botonTexto, { color: '#FFF' }]}>Keep Shopping</Text>
        </Button>

     

  
          <Button
            onPress={() => progresoPedido()}
            style={globalStyles.botonForm}
            full

          >
            <Text style={globalStyles.botonTexto}>Ordering</Text>
          </Button>
   
      </List>
      </ScrollView>
    </Container>
  )
}

export default ResumenPedido