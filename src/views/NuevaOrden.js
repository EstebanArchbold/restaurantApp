import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Button, Text, H1 } from 'native-base'
import firebase from '../firebase/firebase'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'

import FormButton from '../components/FormButton'
import SignupScreen from '../authFirebase/SignupScreen'


const NuevaOrden = () => {

  const navigation = useNavigation()
  return (
    <Container style={globalStyles.contenedor}>

      <H1 style={globalStyles.textoH1Inicio}>Welcome</H1>
      <View style={styles.contenido}>
        <Image source={require('../assets/512x512.png')} />
      </View>
      <View style={[globalStyles.contenido, styles.contenido]}>

        <Button
          style={globalStyles.boton}
          rounded
          block
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={globalStyles.botonTexto}>Create New Order</Text>
        </Button>
        <FormButton
          rounded
          block
          buttonTitle="Login"
          onPress={() => navigation.navigate('Login')}
        />

        <TouchableOpacity
          style={globalStyles.forgotButton}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={globalStyles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>

      </View>

    </Container>
  )
}
const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NuevaOrden