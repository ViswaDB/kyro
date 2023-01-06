import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, fontfamily, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: '100%',
    height: '100%',
  },
  txt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: hp('3%'),
  },

  bodyView: {
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    fontSize: sizes.bigFont,
    color: colors.black,
    fontFamily: 'Poppins-Bold',
  },
  subHeader: {
    fontSize: sizes.regularFont,
    color: colors.black,
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: sizes.regularFont,
    color: colors.black,
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  floatingButton: {
    width: 70,
    height: 70,
    ...baseStyle.shadowBlack_1,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: hp('3%'),
    right: hp('3%'),
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  hiddeItemContainer: [
    baseStyle.flexDirectionRow,
    baseStyle.justifyContentSB,
    baseStyle.width90Percentage,
    baseStyle.alignSelfCenter,
    baseStyle.alignItemsCenter,
    baseStyle.marginTop10px,
  ],
  dayText: [
    baseStyle.txtStylePoppinsSemiBold(0.032, colors.primary),
    baseStyle.width96Percentage,
    baseStyle.alignSelfCenter,
  ],
  bottomSheet: {
    container: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
  },
});

export default styles;
