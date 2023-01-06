import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {strings} from '../../constant';
import {baseStyle, colors, fontfamily} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  tabsContainer: [
    baseStyle.flexDirectionRow,
    baseStyle.width94Percentage,
    baseStyle.justifyContentSB,
    baseStyle.alignSelfCenter,
    baseStyle.marginTop15px,
  ],
  txt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: hp('3%'),
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  tabText: [baseStyle.txtStylePoppinsSemiBold(0.035, colors.primary)],
  underline: {
    borderBottomWidth: 5,
    borderBottomColor: colors.secondaryLight,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default styles;
