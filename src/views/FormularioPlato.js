import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Alert } from 'react-native'
import {
  Container,
  Form,
  Icon,
  Input,
  Grid,
  Col,
  Button,
  Body,
  Footer,
  FooterTab,
  startIcon,
  View,
  Text
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global'

import PedidoContext from '../context/pedidos/pedidosContext'

const FormularioPlato = () => {

  // State para la cantidad que marca el usuario de cada producto
  const [cantidad, guardarCantidad] = useState(1)
  const [total, guardarTotal] = useState(0)

  // Context 
  const { plato, guardarPedido } = useContext(PedidoContext)
  const { price } = plato

  // Redireccionar hasta el resumen de pedido
  const navigation = useNavigation()

  // En cuanto el componente carga, calcular la cantidad a pagar
  useEffect(() => {
    calcularTotal()
  }, [cantidad])

  // Calcula el total del platillo por su cantidad
  const calcularTotal = () => {
    const totalPagar = price * cantidad;
    guardarTotal(totalPagar);
  }

  // decrementar cantidad del producto elegido en Uno
  const decrementarCantidad = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1
      guardarCantidad(nuevaCantidad)
    }
  }

  //incrementar cantidad  del producto elegido en Uno
  const incrementarCantidad = () => {
    const nuevaCantidad = parseInt(cantidad) + 1
    guardarCantidad(nuevaCantidad)
  }

  // confirma si la cantidad de produto es correcta
  const confirmarOrden = () => {
    Alert.alert(
      '¿Deseas confirmar tu pedido?',
      'Un pedido confirmado ya no se podrá modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            //Añade y Almacena el producto en  el pedido principal
            const pedido = {
              ...plato,
              cantidad,
              total
            }
           // console.log(total)
           // console.log(pedido)
            guardarPedido(pedido)

            // Navegar hacia el resumen
          navigation.navigate("ResumenPedido")

          }
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ]
    )
  }


  return (
    <View>
      <Form>
        <Text style={globalStyles.titulo}>Amount</Text>
        <Grid>
          <Col>
            <Button
              props
              dark
              style={{ height: 70, justifyContent: 'center' }}
              onPress={() => decrementarCantidad()}
            >
              <Icon style={{ fontSize: 40 }} name="remove" />
            </Button>
          </Col>
          <Input
            style={{ textAlign: 'center', fontSize: 30 }}
            value={cantidad.toString()}
            keyboardType="numeric"
            onChangeText={cantidad => guardarCantidad(cantidad)}
          />
          <Col>
            <Button
              props
              style={{ height: 70, justifyContent: 'center' }}
              onPress={() => incrementarCantidad()}
            >
              <Icon style={{ fontSize: 40 }} name="add" />
            </Button>
          </Col>
        </Grid>
        <Text style={globalStyles.cantidadSubtotal}>Subtotal:  {total}$ </Text>
      </Form>

      <Footer style={styles.footer}>
        <FooterTab>
          <Button
            style={globalStyles.boton}
            onPress={() => confirmarOrden()}
          >
            <Text style={globalStyles.botonTexto}>Add to Cart</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    marginTop: '20%'
  }
})

export default FormularioPlato