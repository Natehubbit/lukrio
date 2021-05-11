import { StyleSheet } from 'react-native'
import { COLORS } from '../../common/theme'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const AddTextStyle = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  container: {
    borderColor: COLORS.border.val,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 1
  },
  title: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    color: COLORS.white.val
  },
  subText: {
    fontSize: hp('2%'),
    color: COLORS.white.val,
    fontStyle: 'italic'
  },
  titleSpace: {
    marginBottom: hp('3%'),
    paddingHorizontal: wp('1%')
  },
  subSpace: {
    marginBottom: hp('2%'),
    paddingHorizontal: wp('1%')
  },
  editedSubContainer: {
    borderWidth: 0
  },
  editedSubText: {
    fontStyle: 'normal',
    fontSize: hp('2.5%')
  },
  actionBtn: {
    marginHorizontal: wp('1%'),
    elevation: 10
  },
  btns: {
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  bullet: {
    backgroundColor: COLORS.white.val,
    height: hp('1%'),
    width: hp('1%'),
    borderRadius: hp('100%'),
    marginRight: 5
  }
})

export default AddTextStyle
