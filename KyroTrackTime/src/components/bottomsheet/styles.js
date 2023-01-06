import {StyleSheet} from 'react-native';
import {strings} from '../../constant';
import {baseStyle, colors} from '../../constant/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  input: {},
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: [
    baseStyle.txtStylePoppinsSemiBold(0.035, colors.primary, strings.uppercase),
    baseStyle.textAlignCenter,
  ],
  tagInput: {...baseStyle.txtStylePoppinsMedium(0.035, colors.primary)},
  addTagView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    ...baseStyle.txtStylePoppinsMedium(0.035, colors.white),
    ...baseStyle.marginLeft2px,
    alignSelf:'center',
    paddingHorizontal:8,
    paddingVertical:3,
    backgroundColor:colors.primary,
    borderRadius:4
  },
  closeIcon:{position: 'absolute',right:0,top:-2}
});
