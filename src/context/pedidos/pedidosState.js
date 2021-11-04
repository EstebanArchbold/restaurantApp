import React, { useReducer } from 'react'

import PedidoReducer from './pedidosReducer'
import PedidoContext from './pedidosContext'

import { 
  SELECCIONAR_PRODUCTO,
  CONFIRMAR_ORDENAR_PLATO,
  MOSTRAR_RESUMEN,
  ELIMINAR_PRODUCTO,
  PEDIDO_ORDENADO
} from '../../types'

const PedidosState = props => {

  // Crear state inicial
  const initialState = {
    pedido: [],
    plato: null,
    total: 0,
    idpedido: ''
  }

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(PedidoReducer, initialState)

  // Selecciona el Producto que el usuario desea ordenar
  const selecionarPlato = plato => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: plato
    })
  }

  // cuando el usuario confirma un pedido
  const guardarPedido = pedido => {
    dispatch({
      type: CONFIRMAR_ORDENAR_PLATO,
      payload: pedido
    })
  }

  // Muestra el total a pagar en el resumen de cada articulo
  const mostrarResumen = total => {
    dispatch({
      type: MOSTRAR_RESUMEN,
      payload: total
    })
  }

  // Elimina el articulo seleccionado del carro de compra
  const eliminarProducto = id => {
    dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id
    })
  }

  const pedidoRealizado = id => {
    dispatch({
      type: PEDIDO_ORDENADO,
      payload: id
    })
  }


  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        plato: state.plato,
        total: state.total,
        idpedido: state.idpedido,
        selecionarPlato,
        guardarPedido,
        mostrarResumen,
        eliminarProducto,
        pedidoRealizado
      }}
    >
      {props.children}
    </PedidoContext.Provider>
  )
}

export default PedidosState