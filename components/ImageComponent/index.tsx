import React, { FC } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import ImageComponentStyle from './ImageComponentStyle'
import Icon from '../Icon/index'
import { COLORS } from '../../common/theme'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from '../../redux/store'
import { slideActions } from '../../redux/slices/slideSlice'
import useEditor from '../../hooks/useEditor'

interface ImageComponentProps {
  uri: string;
  id: number;
}

const ImageComponent: FC<ImageComponentProps> = ({
  uri,
  id
}) => {
  const dispatch = useDispatch()
  const { slideId } = useEditor()
  const onDelete = () => {
    dispatch(
      slideActions.removeSubtext({
        idx: id,
        slideId
      })
    )
  }
  return (
    <View style={[ImageComponentStyle.container]}>
      <View style={[ImageComponentStyle.actions]}>
        <TouchableOpacity onPress={onDelete}>
          <Icon
            size={hp('3%')}
            color={COLORS.white.val}
            name="close-circle"
          />
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="cover"
        style={[ImageComponentStyle.img]}
        source={{ uri }}
      />
    </View>
  )
}

export default ImageComponent
