import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom:10
  },
  input: {
    ...baseStyle.txtStylePoppinsSemiBold(0.035, colors.secondary),
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  box:{
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal:10,
    paddingVertical:12
  }
});

export default styles;
