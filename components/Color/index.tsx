import React, { FC } from 'react'
import { View, Text, TouchableOpacity, TextStyle } from 'react-native'
import ColorStyle from './ColorStyle'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../Icon';

interface ColorProps {
  color: TextStyle['color']
  active?: boolean
  onPress: () => void
  type?: 'category' | 'color'
}

export const Color: FC<ColorProps> = ({ color, type, active, onPress }) => {
  const isCat = type === 'category'
  return <>
    <TouchableOpacity
      onPress={onPress}
      style={[
        ColorStyle.color,
        isCat && ColorStyle.colorType,
        { backgroundColor: color }]} >
      {active && <Icon
        size={hp('2%')}
        name='check-circle'
        style={ColorStyle.activeIcon} />}
    </TouchableOpacity>
  </>
}

export default Color
