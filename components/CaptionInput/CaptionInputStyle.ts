import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const CaptionInputStyle = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    margin: wp('5%')
  },
  input: {
    fontSize: hp('2%')
  }
})

export default CaptionInputStyle
