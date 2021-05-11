import React, {
  FC,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import CaptionInputStyle from './CaptionInputStyle'
import useEditor from '../../hooks/useEditor'
import { slideActions } from '../../redux/slices/slideSlice'
import { useDispatch } from '../../redux/store'

interface CaptionInputProps {
}

const CaptionInput: FC<CaptionInputProps> = () => {
  const dispatch = useDispatch()
  const { slideId } = useEditor()
  const { captionText } = useEditor()
  const [showInput, setShowInput] = useState(false)
  const [input, setInput] = useState<string>()
  const ref = useRef<TextInput | null>(null)
  useEffect(() => {
    showInput && ref.current && ref.current.focus()
  }, [showInput])
  const onAddCaption = () => {
    setShowInput(true)
  }
  const onBlur = () => {
    setShowInput(false)
    dispatch(slideActions.setCaption({
      id: slideId,
      text: input
    }))
  }
  const onChange = (v: string) => {
    setInput(v)
  }
  return (
    <View style={[CaptionInputStyle.container]}>
      {!showInput && (
        <TouchableOpacity onPress={onAddCaption}>
          <Text
            numberOfLines={3}
            style={[CaptionInputStyle.input]}
          >
            {captionText || 'Add caption'}
          </Text>
        </TouchableOpacity>
      )}
      {showInput && (
        <TextInput
          ref={ref}
          multiline
          onChangeText={onChange}
          defaultValue={captionText}
          onBlur={onBlur}
          style={[CaptionInputStyle.input]}
          placeholder="Add caption"
        />
      )}
    </View>
  )
}

export default CaptionInput
