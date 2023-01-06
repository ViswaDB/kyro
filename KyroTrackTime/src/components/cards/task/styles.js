import {StyleSheet} from 'react-native';
import {baseStyle, colors, sizes} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
    marginVertical: 5,
    alignSelf: 'center',
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...baseStyle.shadowBlack_1,
  },
  title: {
    fontSize: sizes.regularFont,
    color: colors.secondaryLight,
  },
});

export default styles;
