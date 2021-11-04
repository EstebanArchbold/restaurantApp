import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import globalStyles from '../styles/global'

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={globalStyles.inputContainer}>
      <View style={globalStyles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={globalStyles.inputLogin}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  )
}

export default FormInput
