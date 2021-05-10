import React, { FC, useEffect, useState } from 'react'
import { View, Text, Switch } from 'react-native'
import BulletSelectorStyle from './BulletSelectorStyle'
import IconButton from '../IconButton/index';
import { useDispatch } from '../../redux/store';
import { slideActions } from '../../redux/slices/slideSlice';
import useEditor from '../../hooks/useEditor';

interface BulletSelectorProps {
  // value: boolean
}

const BulletSelector: FC<BulletSelectorProps> = ({
  // value: val
}) => {
  const dispatch = useDispatch()
  const { textId, slideId, bullet } = useEditor()
  const [value, setValue] = useState(bullet)
  const onPress = (v: boolean) => {
    setValue(v)
    dispatch(slideActions
      .setSubTextBullet({
        slideId,
        bullet: v,
        idx: textId,
      }))
  }
  useEffect(() => {
    setValue(bullet)
  }, [textId, slideId, bullet])
  return (
    <View style={[BulletSelectorStyle.container]}>
      <Text style={[BulletSelectorStyle.label]}>
        Bullet
      </Text>
      <Switch value={value} onValueChange={onPress} />
    </View>
  )
}

export default BulletSelector
