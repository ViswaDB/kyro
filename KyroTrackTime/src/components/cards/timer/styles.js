import {StyleSheet} from 'react-native';
import {baseStyle, colors, sizes} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sizes.regularFont,
    color: colors.secondaryLight,
  },
  input: {
    height:100,
    width: '100%',
    ...baseStyle.txtStylePoppinsSemiBold(0.05, colors.primary),
    alignItems:'center',
    textAlign:'center'
  },
});

export default styles;
