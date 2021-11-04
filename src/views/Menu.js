import React, { useContext, useEffect, Fragment } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body
} from 'native-base'
import globalStyles from '../styles/global'

import FirebaseContext from '../context/firebase/firebaseContext'
import PedidoContext from '../context/pedidos/pedidosContext'

//import firebase from '@react-native-firebase/app'
//import firestore from '@react-native-firebase/firestore'

const Menu = () => {

  // Context de Firebase
  const { menu, obtenerProductos } = useContext(FirebaseContext)

  // Context de pedido
  const { selecionarPlato } = useContext(PedidoContext)

  // Hook para redireccionar hacia el producto seleccionado
  const navigation = useNavigation()

  useEffect(() => {
    obtenerProductos()

    //console.log(menu)
  }, [])

  const mostrarHeading = (categoria, i) => {

    if (i > 0) {
      const categoryAnterior = menu[i - 1].categoria
      if (categoryAnterior !== categoria) {
        return (
          <Separator style={styles.separator}>
            <Text style={styles.separatorTexto}> {categoria} </Text>
          </Separator>
        )
      }
    } else {
      return (
        <Separator style={styles.separator}>
          <Text style={styles.separatorTexto}> {categoria} </Text>
        </Separator>
      )

    }

  }

  return (
    <Container>
      <ScrollView>
        <List>
          {menu.map((plato, i) => {
            //console.log(plato)
            const { name, image, description, category, price, id } = plato

            return (
              <Fragment key={id}>

                {mostrarHeading(category, i)}

                <ListItem
                  onPress={() => {

                    // Eliminar algunas propiedades del plato
                    const { existencia, ...plato2 } = plato

                    selecionarPlato(plato2)
                    navigation.navigate("DetallePlato")
                  }}
                >
                  <Thumbnail
                    large
                    //square
                    source={{ uri: image }}
                  />
                  <Body>
                    <Text>{name}</Text>
                    <Text
                      note
                      numberOfLines={2}
                    >
                      {description}
                    </Text>
                    <Text>Price {price} $</Text>
                  </Body>
                </ListItem>
              </Fragment>
            )
          })}
        </List>
      </ScrollView>
      </Container>
  )
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#000',
  },
  separatorTexto: {
    textAlign: 'center',
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})

export default Menu
