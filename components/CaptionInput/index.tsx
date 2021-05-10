import React, { FC, useEffect, useRef, useState } from 'react'
import { Control, Controller, FieldValues, UseFormRegisterReturn } from 'react-hook-form'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import CaptionInputStyle from './CaptionInputStyle'

interface CaptionInputProps {
  field: string
  control: Control<FieldValues>
}

const CaptionInput: FC<CaptionInputProps> = ({
  field,
  control
}) => {
  const [showInput, setShowInput] = useState(false)
  const [caption, setCaption] = useState('')
  const ref = useRef<TextInput | null>(null)
  useEffect(() => {
    showInput &&
      ref.current &&
      ref.current.focus()
  }, [showInput])
  const onAddCaption = () => {
    setShowInput(true)
  }
  const onBlur = (val: string) => {
    setShowInput(false)
    setCaption(val)
  }
  return (
    <View style={[CaptionInputStyle.container]}>
      {!showInput && <TouchableOpacity onPress={onAddCaption}>
        <Text
          numberOfLines={3}
          style={[CaptionInputStyle.input]}>
          {caption || 'Add caption'}
        </Text>
      </TouchableOpacity>}
      {showInput &&
        <Controller
          name={field}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              ref={ref}
              multiline
              onBlur={() => onBlur(value)}
              onChangeText={onChange}
              value={value}
              style={[CaptionInputStyle.input]}
              placeholder='Add caption' />
          )}
        />
      }
    </View>
  )
}

export default CaptionInput
