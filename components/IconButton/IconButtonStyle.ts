import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLORS } from '../../common/theme'

const IconButtonStyle = StyleSheet.create({
  container: {
    padding: wp('1%')
  },
  iconContainer: {
    height: '100%',
    padding: wp('3%')
  },
  active: {
    borderWidth: 1,
    borderColor: COLORS.primary.val,
    borderRadius: 4
  }
})

export default IconButtonStyle
