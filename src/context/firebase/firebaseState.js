import React, { useReducer } from 'react'

import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

import { OBTENER_PRODUCTOS_EXITO } from '../../types'
import _ from 'lodash'

const FirebaseState = props => {

  // Crear state inicial
  const initialState = {
    menu: []
  }

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState)

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {

    // Consultar Firebase
    firebase.db.settings({ experimentalForceLongPolling: true });
    firebase.db
      .collection('products')
      .where('exist', '==', true) // TRAE SOLO LAS EXISTENCIAS PLATOS QUE HAY
      .onSnapshot(manejarSnapshot)

    function manejarSnapshot(snapshot) {
      let platos = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      
      // Ordenar por categoria con lodash
      platos = _.sortBy(platos, 'category')

      //console.log(platos)
      // Tenemos los resultados de la base de datos
      dispatch({
        type: OBTENER_PRODUCTOS_EXITO,
        payload: platos
      })

    }
  }

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState