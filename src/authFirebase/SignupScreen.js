import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
//import { useNavigation } from '@react-navigation/native'


import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import globalStyles from '../styles/global'
import NuevaOrden from '../views/NuevaOrden'


export default class SignupScreen extends React.Component{

  state = { name: '', email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    //const { name, email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
render(){

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.textLogin}>Create an account</Text>

        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <FormInput
          labelValue={name}
          onChangeText={name => this.setState({ name })}
          placeholderText="Name"
          iconType="user"
          keyboardType="name-phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
         
          onChangeText={email => setState({ email })}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
        
          onChangeText={password => setState( {password} )}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
       
          onChangeText={password=> this.setState({ password })}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign Up"
          onPress={() => register(name, email, password)}
        />

        <View style={globalStyles.textPrivate}>
          <Text style={globalStyles.color_textPrivate}>By registering, you confirm that you accept our </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[globalStyles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text>
          </TouchableOpacity>
          <Text style={globalStyles.color_textPrivate}> and </Text>
          <Text style={[globalStyles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text>
        </View>

        <TouchableOpacity
          style={globalStyles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={globalStyles.navButtonText}>
            Have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

}
