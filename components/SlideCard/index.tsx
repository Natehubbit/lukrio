import React, { FC } from 'react'
import { View as MotiView } from 'moti'
import { ImageBackground, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import SlideCardStyle from './SlideCardStyle'
import AddText from '../AddText'
import { SlideData } from '../../types/index'
import ImageComponent from '../ImageComponent'

interface SlideCardProps {
  data: SlideData;
}

const SlideCard: FC<SlideCardProps> = ({ data }) => {
  const { id, subTexts, title, header, background } = data
  const hasMono = !!background.mono
  const backColor = hasMono && {
    backgroundColor: background.mono as string
  }
  const gradient = !hasMono && background?.colors?.gradient
  const hasImage = !!(background && background?.image)
  return (
    <MotiView
      style={[SlideCardStyle.container, backColor]}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 1000 }}
    >
      {!hasMono && gradient && (
        <LinearGradient
          colors={gradient}
          style={SlideCardStyle.background}
        />
      )}
      {hasImage && (
        <ImageBackground
          style={[SlideCardStyle.imgBack]}
          source={{ uri: background.image }}
        />
      )}
      <View style={[SlideCardStyle.content]}>
        <View style={[SlideCardStyle.titleContainer]}>
          <Text style={[SlideCardStyle.title]}>
            {title}
          </Text>
        </View>
        <View style={[SlideCardStyle.body]}>
          <AddText
            slideId={id}
            value={header}
            type="header"
          />
          {subTexts.map((sub, i) => {
            return sub.type === 'text'
              ? (
              <AddText
                key={i}
                id={i}
                slideId={id}
                type="subText"
                value={sub}
              />
                )
              : (
              <ImageComponent
                key={i}
                id={i}
                uri={sub.text}
              />
                )
          })}
          <AddText slideId={id} type="adder" />
        </View>
      </View>
    </MotiView>
  )
}

export default SlideCard
