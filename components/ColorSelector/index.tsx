import React, { FC, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextStyle, ColorValue, Switch, CheckBox, TouchableNativeFeedback } from 'react-native';
import ColorSelectorStyle from './ColorSelectorStyle'
import { slideActions } from '../../redux/slices/slideSlice';
import { color } from 'react-native-reanimated';
import { useDispatch } from '../../redux/store';
import useEditor from '../../hooks/useEditor';
import Icon from '../Icon';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, BACKGROUND_TYPE } from '../../common/constants';
import ImageSelector from '../ImageSelector';
import GradientSelector from '../GradientSelector';
import Color from '../Color';


interface ColorSelectorProps {
  activeColor?: ColorValue
  isGradient?: boolean
  type?: 'background' | 'text'
}

const ColorSelector: FC<ColorSelectorProps> = ({
  type
}) => {
  const dispatch = useDispatch()
  const { textId, slideId, style, background } = useEditor()
  const [color, setColor] = useState<ColorValue>()
  const [colors, setColors] = useState<ColorValue[]>(background?.colors?.gradient)
  const [mode, setMode] = useState<'gradient' | 'mono' | 'image'>('gradient')
  const isGradient = mode === 'gradient'
  const isBackground = type === 'background'
  const isImage = mode === 'image'
  const isText = type === 'text'
  const isMono = mode === 'mono'

  useEffect(() => {
    if (!isBackground) {
      style?.color
        ? setColor(style.color)
        : setColor(undefined)
    } else {
      setColors(background?.colors?.gradient)
    }
  }, [textId, slideId, style, background])

  useEffect(() => {
    if (mode === 'mono') {
      setColor(undefined)
    }
  }, [mode])

  const onSlectColor = (color: ColorValue) => {
    setColor(color)
    !isBackground && dispatch(slideActions
      .setSubtextStyle({
        idx: textId,
        slideId,
        style: { color }
      }))

    if (isBackground) {
      setMonoBackground(color)
    }
  }

  const setMonoBackground = (color) => {
    isBackground && dispatch(
      slideActions
        .setBackground({
          slideId,
          background: {
            mono: color,
            colors: {
              gradient: undefined,
            },
            image: undefined
          }
        })
    )
  }

  const onChangeMode = (val: boolean, type: typeof mode) => {
    val
      ? setMode(type)
      : setMode('mono')
  }

  const onSelectImage = (uri: string) => {
    dispatch(slideActions
      .setBackground({
        slideId,
        background: {
          mono: undefined,
          colors: {
            gradient: undefined
          },
          image: uri
        }
      }))
  }

  return (
    <>
      {isBackground && <View style={[ColorSelectorStyle.modeContainer]}>
        {BACKGROUND_TYPE.map(t => {
          const backType = t.toLowerCase() as typeof mode
          return <View key={t} style={ColorSelectorStyle.mode}>
            <Text>{t}</Text>
            <Switch
              value={mode === backType}
              onValueChange={v => onChangeMode(v, backType)} />
          </View>
        })}
      </View>}
      <View style={ColorSelectorStyle.container}>
        {isGradient &&
          isBackground &&
          <View style={ColorSelectorStyle.typeContainer}>
            <GradientSelector />
          </View>}
        {(!isImage &&
          !isGradient) ||
          isText
          && <View
            style={ColorSelectorStyle.colorContainer}>
            {COLORS.map(c => <Color
              key={c}
              active={c === color}
              onPress={() => onSlectColor(c)}
              color={c} />)}
          </View>}
        {isMono &&
          isBackground &&
          <View
            style={ColorSelectorStyle.colorContainer}>
            {COLORS.map(c => <Color
              key={c}
              active={c === color}
              onPress={() => onSlectColor(c)}
              color={c} />)}
          </View>
        }
        {isImage &&
          <ImageSelector
            uri={background?.image}
            onSelect={onSelectImage} />
        }
      </View>
    </>
  )
}

export default ColorSelector
