import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import CaptionInput from '../../components/CaptionInput'
import Editor from '../../components/Editor'
import Navbar from '../../components/Navbar'
import SlideShow from '../../components/SlideShow'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../common/theme'
import { useForm } from 'react-hook-form'
import useEditor from '../../hooks/useEditor';

const Home = () => {
  const { control } = useForm()
  return (
    <>
      <Navbar title='Templates' />
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.container}>
        <View style={[styles.contentContainer]} >
          <View style={[styles.content]}>
            <SlideShow />
            <CaptionInput
              field='caption'
              control={control}
            />
          </View>
          <Editor />
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.save]}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.white.val,
    minHeight: wp('85%')
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'flex-start'
  },
  save: {
    padding: wp('5%'),
    backgroundColor: COLORS.primary.val,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('15%')
  },
  saveText: {
    color: COLORS.white.val,
    fontSize: hp('2.5%')
  },
});