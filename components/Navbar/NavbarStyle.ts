import { StyleSheet } from 'react-native'
import { COLORS } from '../../common/theme'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import UtilService from '../../services/UtilService'

const NavbarStyle = StyleSheet.create({
  container: {
    padding: wp('2%'),
    elevation: 2,
    backgroundColor: COLORS.white.val,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  head: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: UtilService.alterColor(
      COLORS.color1.val,
      COLORS.color1.step
    )
  },
  link: {
    color: UtilService.alterColor(
      COLORS.color1.val,
      COLORS.color1.step
    ),
    fontSize: hp('2%')
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default NavbarStyle
