import React, { FC, useEffect, useState } from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import UtilService from '../../services/UtilService';
import Icon from '../Icon'
import ImageSelectorStyle from './ImageSelectorStyle';

interface ImageSelectorProps {
  uri?: string
  onSelect: (uri: string) => void
}

const ImageSelector: FC<ImageSelectorProps> = ({
  uri: imageUri,
  onSelect
}) => {
  const [uri, setUri] = useState<string>(imageUri)
  useEffect(() => {
    UtilService.requestImagePermission()
  }, [])
  useEffect(() => {
    setUri(imageUri)
  }, [imageUri])
  const onPickImage = async () => {
    const uri = await UtilService.pickImage()
    if (uri) {
      setUri(uri)
      onSelect(uri)
    }
  }
  return (
    <TouchableNativeFeedback onPress={onPickImage}>
      <View style={[ImageSelectorStyle.container]}>
        <Text>Select Image</Text>
        {uri
          ? <Image
            resizeMode='cover'
            source={{ uri }}
            style={[ImageSelectorStyle.selected]} />
          : <Icon name='camera-image' />}
      </View>
    </TouchableNativeFeedback>
  )
}

export default ImageSelector
