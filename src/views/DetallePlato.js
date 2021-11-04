import React, { useContext, useEffect } from 'react'
import { Image } from 'react-native'
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Card,
  CardItem
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global'

import PedidoContext from '../context/pedidos/pedidosContext'

const DetallesPlato = () => {

  //HOOK PARA NAVEGAR
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({ title: name })
  }, [])

  // Pedido context
  const { plato: { name, image, description, price } } = useContext(PedidoContext)
  

  //console.log(plato)



  return (
    <Container style={globalStyles.contenedor}>
      <H1 style={globalStyles.titulo}> {name} </H1>
      <Card>
        <CardItem>
          <Body>
            <Image style={globalStyles.imagen} source={{ uri: image }} />
            <Text style={{ marginTop: 20 }}>{description} </Text>
            <Text style={globalStyles.cantidad}>Price: {price}$</Text>
          </Body>
        </CardItem>
      </Card>
      <Footer>
        <FooterTab>
          <Button
            style={globalStyles.boton}
            onPress={() => navigation.navigate("FormularioPlato")}
          >
            <Text style={globalStyles.botonTexto}>Add to Cart</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>


  )
}

export default DetallesPlato