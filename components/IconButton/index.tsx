import React, { FC } from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'
import Icon from '../Icon'
import IconButtonStyle from './IconButtonStyle'
import { COLORS } from '../../common/theme'

interface IconButtonProps {
  name: typeof Icon['defaultProps']['name'];
  active?: boolean;
  onPress?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
  name,
  active,
  onPress
}) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      style={[IconButtonStyle.container]}
    >
      <View
        style={[
          IconButtonStyle.iconContainer,
          active && IconButtonStyle.active
        ]}
      >
        <Icon name={name} color={COLORS.primary.val} />
      </View>
    </TouchableNativeFeedback>
  )
}

export default IconButton
