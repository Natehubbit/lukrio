import { SafeAreaView, ScrollView } from 'moti'
import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import Editor from './components/Editor'
import Navbar from './components/Navbar'
import SlideCard from './components/SlideCard'
import { COLORS } from './common/theme'
import { Controller, useForm } from 'react-hook-form'
import CaptionInput from './components/CaptionInput'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import SlideShow from './components/SlideShow'
import useHistory from './hooks/useEditor'
import Home from './screens/Home'

export default function App () {
  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.root]}>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
