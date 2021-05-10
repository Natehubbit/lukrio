import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GradientSelectorStyle from './GradientSelectorStyle'
import useEditor from '../../hooks/useEditor';
import Color from '../Color';
import { slideActions } from '../../redux/slices/slideSlice';
import { useDispatch } from '../../redux/store';
import Icon from '../Icon';
import { COLORS } from '../../common/theme';
import { COLORS as COLS } from '../../common/constants'

const GradientSelector = () => {
  const { background, slideId } = useEditor()
  const [gradients, setGradients] = useState<string[]>([])
  const dispatch = useDispatch()
  const hasGradient = gradients && gradients.length > 2

  useEffect(() => {
    if (background) {
      console.log('Back', background)
      const { colors: { gradient } } = background || {
        colors: {
          gradient: ['transparent', 'transparent']
        }
      }
      setGradients(gradient)
    } else setGradients([])
  }, [background])

  const onSelect = (c: string, index: number) => {
    const grad = gradients && gradients.map((g, i) => {
      if (i === index) {
        return c
      }
      return g
    })
    setGradients(grad)
    dispatch(slideActions
      .setBackground({
        slideId,
        background: {
          colors: {
            gradient: grad
          }
        }
      }))
  }

  const onAddGradient = () => {
    const hasGradient = !!gradients
    dispatch(slideActions
      .setBackground({
        slideId,
        background: {
          image: undefined,
          mono: undefined,
          colors: {
            gradient: hasGradient
              ? [...gradients, 'transparent']
              : ['transparent', 'transparent']
          }
        }
      }))
  }

  const onRemoveGradient = (id: number) => {
    setGradients(grads => {
      return grads.filter((_, i) => id !== i)
    })
    const newGradients = gradients.filter((_, i) => id !== i)
    dispatch(slideActions
      .setBackground({
        slideId,
        background: {
          image: undefined,
          mono: undefined,
          colors: {
            gradient: newGradients
          }
        }
      }))
  }

  return (
    <View style={[GradientSelectorStyle.container]}>
      {gradients &&
        gradients.map((col, i) => {
          return <View
            key={i}
            style={[GradientSelectorStyle.row]}>
            <View style={[GradientSelectorStyle.head]}>
              <Text
                style={[GradientSelectorStyle.label]}>
                Gradient {i + 1}
              </Text>
              {hasGradient && <TouchableOpacity onPress={() => onRemoveGradient(i)}>
                <Icon name='close-circle' color={COLORS.primary.val} size={25} />
              </TouchableOpacity>}
            </View>
            <View style={[GradientSelectorStyle.colors]}>
              {COLS.map(c => {
                return <Color
                  active={c === col}
                  key={c}
                  color={c}
                  onPress={() => onSelect(c, i)} />
              })}
            </View>
          </View>
        })}
      <TouchableOpacity onPress={onAddGradient} style={[GradientSelectorStyle.add]}>
        <Text style={[GradientSelectorStyle.addText]}>+Add Gradient</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GradientSelector
