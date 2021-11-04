import React, {useContext, useState} from 'react'
import {View, Text, TouchableOpacity, Image } from 'react-native'
import firebase from '../firebase/firebase'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import globalStyles from '../styles/global'

const LoginScreen = () => {

  state = { name: '', email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    const { name, email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('NuevaOrden'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  return (
    <View style={globalStyles.containerLogin}>
      <Image
        source={require('../assets/images.jpeg')}
        style={globalStyles.logoLogin}
      />
      <Text style={globalStyles.textLogin}>Restaurant App</Text>


      <FormInput
        labelValue={name}
        onChangeText={name => this.setName(name)}
        placeholderText="Name"
        iconType="user"
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
 
      <FormInput
        labelValue={email}
        onChangeText={email => setEmail({email})}
        placeholderText="Email"
        iconType="inbox"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
 
      <FormInput
        labelValue={password}
        onChangeText={password => setPassword(password)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
 
      <FormButton
        buttonTitle="Login"
        onPress={this.handleLogin}
      />
 
      <TouchableOpacity style={globalStyles.forgotButton} onPress={() => {}}>
        <Text style={globalStyles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        style={globalStyles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={globalStyles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  )
}
 
export default LoginScreen