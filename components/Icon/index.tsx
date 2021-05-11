import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS } from '../../common/theme'

const Icon: FC<
  typeof MaterialCommunityIcons['Button']['defaultProps']
> = ({ name, size, ...props }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      {...props}
      size={size || hp('4%')}
    />
  )
}

export default Icon
