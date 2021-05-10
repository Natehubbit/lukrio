import React, { FC, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from '../Icon';
import AddTextStyle from './AddTextStyle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../common/theme';
import { useDispatch } from '../../redux/store';
import { slideActions } from '../../redux/slices/slideSlice';
import useEditor from '../../hooks/useEditor';
import { SubText } from '../../types';
import { Header } from '../../types/index';

interface AddTextProps {
  slideId: number
  id?: number
  type?: 'header' | 'subText' | 'adder'
  value?: SubText,
}

const AddText: FC<AddTextProps> = ({
  slideId,
  id,
  type,
  value,
}) => {
  const dispatch = useDispatch()
  const { bullet, text: val, style: subStyle } = value || {
    text: '', bullet: false, style: undefined
  }
  const { setTextId, subTextNo } = useEditor()
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(val || '')
  const ref = useRef<TextInput | null>(null)
  const isHeader = type === 'header'
  const isAdder = type === 'adder'

  useEffect(() => {
    editing &&
      ref.current &&
      ref.current.focus()
  }, [editing])
  const onEdit = () => {
    setEditing(true)

  }
  const onBlur = (val: any) => {
    setEditing(false)
    setText(val)
    if (isHeader) {
      dispatch(
        slideActions.
          setHeader({ id: slideId, text: val })
      )
    }
    if (isAdder) {
      setText('')
    }
    if (val && !text && !isHeader) {
      dispatch(
        slideActions
          .addSubText({
            id: slideId,
            text: val
          }))
    }
    if (val && text && !isHeader) {
      dispatch(
        slideActions
          .updateSubtext({
            slideId,
            text: val,
            textId: id
          }))
    }
  }
  const onDelete = () => {
    dispatch(
      slideActions.removeSubtext({
        idx: id,
        slideId
      })
    )
  }
  const style = isHeader ?
    AddTextStyle.title : AddTextStyle.subText
  const spacing = !isHeader ?
    AddTextStyle.subSpace : AddTextStyle.titleSpace
  const hasSubText = !!text && !isHeader && !editing
  const textStyle = (hasSubText) && AddTextStyle.editedSubText
  const subTextRootStyle = hasSubText && AddTextStyle.editedSubContainer
  return (
    <View style={[AddTextStyle.root, spacing]}>
      {bullet && <View style={[AddTextStyle.bullet]} />}
      <TouchableOpacity
        onPress={onEdit}
        style={[AddTextStyle.container, subTextRootStyle]}>
        {!editing ? <Text numberOfLines={10} style={[style, textStyle, subStyle]}>
          {!!val ? val : isHeader
            ? 'Tap to add title' : 'Tap to add subtext'}
        </Text>
          : <TextInput
            ref={ref}
            style={[style]}
            multiline={!isHeader}
            defaultValue={val}
            onEndEditing={e => onBlur(e.nativeEvent.text)}
          />}
      </TouchableOpacity>
      {hasSubText && <View style={[AddTextStyle.btns]}>
        <TouchableOpacity onPress={() => setTextId(id)} style={[AddTextStyle.actionBtn]}>
          <Icon
            name='text'
            color={COLORS.white.val}
            size={hp('3%')} />
        </TouchableOpacity>
        {!isHeader && <TouchableOpacity
          onPress={onDelete}
          style={[AddTextStyle.actionBtn]}>
          <Icon
            name='close-circle'
            color={COLORS.white.val}
            size={hp('3%')} />
        </TouchableOpacity>}
      </View>}
    </View>

  )
}

export default AddText
