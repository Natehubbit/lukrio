import React, { FC, useState } from 'react'
import { View as MotiView, View } from 'moti'
import EditorItem from '../EditorItem'
import { Text, useWindowDimensions } from 'react-native'
import EditorStyle from './EditorStyle'
import Icon from '../Icon'
import IconButton from '../IconButton/index'
import { EDIT_TOOLS } from '../../common/constants'
import { useDispatch } from '../../redux/store'
import { slideActions } from '../../redux/slices/slideSlice'
import ColorSelector from '../ColorSelector'
import FontSelector from '../FontSelector'
import BulletSelector from '../BulletSelector'
import useEditor from '../../hooks/useEditor'
import ImageSelector from '../ImageSelector'

interface EditorProps { }

const Editor: FC<EditorProps> = () => {
  const { slideId, textType, textId, hasText } =
    useEditor()
  const { height } = useWindowDimensions()
  const dispatch = useDispatch()
  const onUndo = () => {
    dispatch(slideActions.undo())
  }
  const onRedo = () => {
    dispatch(slideActions.redo())
  }
  const onAddImage = (uri: string) => {
    dispatch(
      slideActions.addSubImage({
        id: slideId,
        text: uri
      })
    )
  }
  return (
    <MotiView
      style={[EditorStyle.container]}
      from={{ translateY: height }}
      animate={{ translateY: 0 }}
      transition={{ type: 'spring', damping: 50 }}
    >
      <View style={[EditorStyle.header]}>
        <Text style={[EditorStyle.heading]}>Tools</Text>
        <View style={[EditorStyle.actions]}>
          <IconButton name="undo" onPress={onUndo} />
          <IconButton name="redo" onPress={onRedo} />
        </View>
      </View>
      {
        <View>
          {Object.keys(EDIT_TOOLS).map((k, i) => {
            const key = k as keyof typeof EDIT_TOOLS
            const isText = key === 'Text'
            const isBack = key === 'Background'
            const isAddImg = key === 'Add Images'
            const textExpanded =
              textType === 'text' && textId !== undefined
            const imageExpanded =
              textType === 'image' && textId !== undefined
            const isIcon = key === 'Icons'
            return (
              <EditorItem
                expanded={
                  isText ? textExpanded : imageExpanded
                }
                key={key}
                label={key}
              >
                {hasText && isText
                  ? (
                  <>
                    {isText && <BulletSelector />}
                    {isText && <FontSelector />}
                    {isText && (
                      <ColorSelector type="text" />
                    )}
                  </>
                    )
                  : isBack
                    ? (
                  <ColorSelector
                    isGradient
                    type="background"
                  />
                      )
                    : isAddImg
                      ? (
                  <ImageSelector onSelect={onAddImage} />
                        )
                      : (
                          !isIcon && (
                    <View
                      style={[EditorStyle.noTextSelected]}
                    >
                      <Text>Select a text to edit</Text>
                    </View>
                          )
                        )}
              </EditorItem>
            )
          })}
        </View>
      }
    </MotiView>
  )
}

export default Editor
