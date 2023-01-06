import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, fontfamily, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
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
    marginTop: 15,
  },
  editView: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryLight,
    borderRadius: 8,
    alignSelf: 'center',
    bottom: 3,
    left: 5,
  },
  deleteView: {
    marginTop: 'auto',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryLight,
    width: '100%',
  },
  input: {
    ...baseStyle.txtStylePoppinsSemiBold(0.035, colors.secondary),
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:10
  },
  tagText: {
    ...baseStyle.txtStylePoppinsMedium(0.035, colors.white),
    ...baseStyle.marginLeft2px,
    alignSelf:'center',
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:colors.primary,
    borderRadius:4
  },
  closeIcon:{position: 'absolute',right:0,top:8},
  addTagView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
