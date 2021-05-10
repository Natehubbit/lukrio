import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';
import FontSelectorStyle from './FontSelectorStyle';
import { useDispatch } from '../../redux/store';
import { slideActions } from '../../redux/slices/slideSlice';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useEditor from '../../hooks/useEditor';

interface FontSelectorProps {
}

const FontSelector: FC<FontSelectorProps> = () => {
  const dispatch = useDispatch()
  const { textId, slideId, style } = useEditor()
  const [value, setValue] = useState(style?.fontSize ? style.fontSize : hp('3%'))
  useEffect(() => {
    (style && style?.fontSize)
      ? setValue(style?.fontSize)
      : setValue(hp('3%'))
  }, [textId, slideId, style])
  const onValueChange = (val: number) => {
    setValue(val)
    dispatch(slideActions.setSubtextStyle({
      idx: textId,
      slideId,
      style: {
        fontSize: val
      }
    }))
  }
  return (
    <View style={[FontSelectorStyle.container]}>
      <Text style={[FontSelectorStyle.label]}>
        Font Size {'\n'}
      </Text>
      <Slider
        value={value}
        minimumValue={4}
        maximumValue={100}
        step={1}
        onValueChange={onValueChange} />
      <Text style={[FontSelectorStyle.value]}>
        {value.toFixed(0)}
      </Text>
    </View>
  )
}

export default FontSelector
