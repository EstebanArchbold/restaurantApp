import { StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  containerLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    height: windowHeight / 18,
    backgroundColor: '#0099FF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contenedorLogin: {
    marginBottom: '30%'
  },
  contenido: {
    marginHorizontal: '2.5%',
    flex: 1
  },
  boton: {
    backgroundColor: '#F1C40F'
  },
  botonTexto: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000'
  },
  botonSignin: {
    backgroundColor: '#0099FF',
  },
  botonForm: {
    backgroundColor: '#F1C40F',
    marginTop: 60
  },
  botonLogin: {
    marginVertical: 10,
    backgroundColor: '#E67E22'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30
  },
  imagen: {
    height: 300,
    width: '100%'
  },
  imagenPortada: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  },
  logoLogin: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  inputLogin: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cantidad: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8E44AD'
  },
  cantidadSubtotal: {
    textAlign: 'center',
    marginVertical: '30%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8E44AD'
  },
  textoH1Inicio: {
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  textoInicio: {
    textAlign: 'center',
    fontSize: 24
  },
  textLogin: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 20,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5'
  }

})

export default globalStyles