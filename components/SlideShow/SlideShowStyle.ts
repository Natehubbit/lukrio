import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const SlideShowStyle = StyleSheet.create({
  item: {
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('3%')
  }
})

export default SlideShowStyle
