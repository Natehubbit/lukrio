import { StyleSheet } from 'react-native'
import { COLORS } from '../../common/theme'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const EditorItemStyle = StyleSheet.create({
  container: {
    minHeight: hp('30%')
  },
  header: {
    padding: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  head: {
    color: COLORS.white.val,
    fontSize: hp('2.5%'),
    fontWeight: '600'
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  itemBody: {
    // paddingVertical: wp("3%"),
  }
})

export default EditorItemStyle
