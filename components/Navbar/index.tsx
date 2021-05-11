import React, { FC } from 'react'
import {
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from '../Icon'
import NavbarStyle from './NavbarStyle'
import useEditor from '../../hooks/useEditor'

interface NavbarProps {
  onNext: () => void
  onBack: () => void
}

const Navbar: FC<NavbarProps> = ({
  onNext,
  onBack
}) => {
  const { title, setSlideId } = useEditor()
  return (
    <View style={[NavbarStyle.container]}>
      <TouchableOpacity
        style={[NavbarStyle.back]}
        onPress={onBack}
      >
        <Icon
          color={NavbarStyle.link.color}
          name="arrow-left"
          size={30}
        />
        <Text style={[NavbarStyle.link]}>Back</Text>
      </TouchableOpacity>
      <View>
        <Text style={[NavbarStyle.head]}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onNext}>
        <Text style={[NavbarStyle.link]}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar
