import React, { FC, useEffect, useState } from 'react'
import {
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../common/theme'
import UtilService from '../../services/UtilService'
import EditorItemStyle from './EditorItemStyle'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { EDIT_TOOLS } from '../../common/constants'
import { ScrollView } from 'moti'

interface EditorItemProps {
  label: keyof typeof EDIT_TOOLS;
  expanded?: boolean;
}

const EditorItem: FC<EditorItemProps> = ({
  label,
  expanded,
  children
}) => {
  const [expand, setExpand] = useState(expanded || false)
  const icon = expand ? 'chevron-down' : 'chevron-right'
  useEffect(() => {
    setExpand(expanded)
  }, [expanded])
  const onExpand = () => {
    setExpand((e) => !e)
  }
  return (
    <View>
      <TouchableNativeFeedback onPress={onExpand}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            style={[EditorItemStyle.gradient]}
            colors={[
              UtilService.alterColor(
                COLORS.color1.val,
                COLORS.color1.step
              ),
              COLORS.color1.val
            ]}
            start={[0.8, 0]}
          />
          <View style={[EditorItemStyle.header]}>
            <Text style={[EditorItemStyle.head]}>
              {label}
            </Text>
            <Icon
              name={icon}
              style={EditorItemStyle.head}
              size={EditorItemStyle.head.fontSize}
            />
          </View>
        </View>
      </TouchableNativeFeedback>
      {expand && (
        <ScrollView
          contentContainerStyle={[EditorItemStyle.itemBody]}
        >
          {children}
        </ScrollView>
      )}
    </View>
  )
}

export default EditorItem
