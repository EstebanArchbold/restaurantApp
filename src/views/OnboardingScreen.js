import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, useNavigation } from '@react-navigation/stack'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  );
}

const Skip = ({ ...props }) => (
  <Button
    title='Skip'
    color="#000000"
    {...props}
  />
)

const Next = ({ ...props }) => (
  <Button
    title='Next'
    color="#000000"
    {...props}
  />
)

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 8 }}
    {...props}
  >
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>

)
const OnboardingScreen = ({ navigation }) => {

 
  return ( 
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.navigate("NuevaOrden")}   
      onDone={() => navigation.navigate("NuevaOrden")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Food Delivery',
          subtitle: "Order your food from the App and we will tell you the exact time it takes to prepare. Don't stand in queues.",
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Online Stores',
          subtitle: 'Create an App to distribute orders for all kinds of stores: groceries, bakeries, fishmongers, butchers, etc ...',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Fast Food',
          subtitle: 'Build the perfect application for a fast food store with this template',
        },

      ]}
    />
   )
}

export default OnboardingScreen