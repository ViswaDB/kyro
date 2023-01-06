import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenwHeight = Dimensions.get('window').height;
//get width dimension
export const WidthDimension = value => {
  return screenWidth * value;
};

//get height dimension
export const HeightDimension = value => {
  return screenwHeight * value;
};
const sizes = {
  // global sizes
  bigFont: hp('3%'),
  mediumFont: hp('2.5%'),
  regularFont: hp('2%'),
  semiRegularFont: hp('1.5%'),
  smallFont: hp('1%'),
  iconBigSize: hp('3%'),
  iconMediumSize: hp('2%'),
  iconSmallSize: hp('1%'),
  mediumFontText: hp('1.5%'),

  // font sizes
};
const fontfamily = {
  fontInter: 'Inter-Medium',
  fontInterRegular: 'Inter-Regular',
  outfitRegular: 'Outfit-Regular',
  fontPoppinsMedium: 'Poppins-Medium',
  fontPoppinsBold: 'Poppins-Bold',
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#0E69C2',
  primary: '#0A2647',
  secondary: '#144272',
  primaryLight: '#205295',
  secondaryLight: '#2C74B3',
  backgroundColor: '#cce1f3',
  gainsboro:'gainsboro',
  green:'#00FF00',
  red:'red',
  gray:'gray'
};

const baseStyle = {
  // 400
  txtStylePoppinsRegular: (fontSize, fontColor,textTransform) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: WidthDimension(fontSize),
    color: fontColor,
    textTransform:textTransform
  }),

  // 500
  txtStylePoppinsMedium: (fontSize, fontColor,textTransform) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: WidthDimension(fontSize),
    color: fontColor,
    textTransform:textTransform

  }),

  // 500
  txtStylePoppinsMediumItalic: (fontSize, fontColor,textTransform) => ({
    fontFamily: 'Poppins-MediumItalic',
    fontSize: WidthDimension(fontSize),
    color: fontColor,
    textTransform:textTransform

  }),

  // 600
  txtStylePoppinsSemiBold: (fontSize, fontColor,textTransform) => ({
    fontFamily: 'Poppins-SemiBold',
    fontSize: WidthDimension(fontSize),
    color: fontColor,
    textTransform:textTransform

  }),

  // 700
  txtStylePoppinsBold: (fontSize, fontColor,textTransform) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: WidthDimension(fontSize),
    color: fontColor,
    textTransform:textTransform

  }),

  //color
  textColor: fontColor => ({
    color: fontColor,
  }),

  //margin
  marginTop2px: {
    marginTop: WidthDimension(0.01),
  },
  marginBottom2px: {
    marginBottom: WidthDimension(0.01),
  },
  marginLeft2px: {
    marginLeft: WidthDimension(0.01),
  },
  marginRight2px: {
    marginRight: WidthDimension(0.01),
  },
  margin2px: {
    margin: WidthDimension(0.01),
  },
  marginHorizontal2px: {
    marginHorizontal: WidthDimension(0.01),
  },
  marginVertical2px: {
    marginVertical: WidthDimension(0.01),
  },

  marginTop3px: {
    marginTop: WidthDimension(0.014),
  },
  marginBottom3px: {
    marginBottom: WidthDimension(0.014),
  },
  marginTop4px: {
    marginTop: WidthDimension(0.017),
  },
  marginBottom4px: {
    marginBottom: WidthDimension(0.017),
  },
  marginTop5px: {
    marginTop: WidthDimension(0.02),
  },
  marginBottom5px: {
    marginBottom: WidthDimension(0.02),
  },
  marginLeft5px: {
    marginLeft: WidthDimension(0.02),
  },
  marginRight5px: {
    marginRight: WidthDimension(0.02),
  },
  margin5px: {
    margin: WidthDimension(0.02),
  },
  marginHorizontal5px: {
    marginHorizontal: WidthDimension(0.02),
  },
  marginVertical5px: {
    marginVertical: WidthDimension(0.02),
  },

  marginTop8px: {
    marginTop: WidthDimension(0.03),
  },

  marginTop10px: {
    marginTop: WidthDimension(0.04),
  },
  marginBottom10px: {
    marginBottom: WidthDimension(0.04),
  },
  marginLeft10px: {
    marginLeft: WidthDimension(0.04),
  },
  marginRight10px: {
    marginRight: WidthDimension(0.04),
  },
  margin10px: {
    margin: WidthDimension(0.04),
  },
  marginHorizontal10px: {
    marginHorizontal: WidthDimension(0.04),
  },
  marginVertical10px: {
    marginVertical: WidthDimension(0.04),
  },

  marginTop15px: {
    marginTop: WidthDimension(0.06),
  },
  marginBottom15px: {
    marginBottom: WidthDimension(0.06),
  },
  marginLeft15px: {
    marginLeft: WidthDimension(0.06),
  },
  marginRight15px: {
    marginRight: WidthDimension(0.06),
  },
  margin15px: {
    margin: WidthDimension(0.06),
  },
  marginHorizontal15px: {
    marginHorizontal: WidthDimension(0.06),
  },
  marginVertical15px: {
    marginVertical: WidthDimension(0.06),
  },

  marginTop20px: {
    marginTop: WidthDimension(0.08),
  },
  marginBottom20px: {
    marginBottom: WidthDimension(0.08),
  },
  marginLeft20px: {
    marginLeft: WidthDimension(0.08),
  },
  marginRight20px: {
    marginRight: WidthDimension(0.08),
  },
  margin20px: {
    margin: WidthDimension(0.08),
  },
  marginHorizontal20px: {
    marginHorizontal: WidthDimension(0.08),
  },
  marginVertical20px: {
    marginVertical: WidthDimension(0.08),
  },

  marginTop25px: {
    marginTop: WidthDimension(0.1),
  },
  marginBottom25px: {
    marginBottom: WidthDimension(0.1),
  },
  marginLeft25px: {
    marginLeft: WidthDimension(0.1),
  },
  marginRight25px: {
    marginRight: WidthDimension(0.1),
  },
  margin25px: {
    margin: WidthDimension(0.1),
  },
  marginHorizontal25px: {
    marginHorizontal: WidthDimension(0.1),
  },
  marginVertical25px: {
    marginVertical: WidthDimension(0.1),
  },

  marginTop30px: {
    marginTop: WidthDimension(0.12),
  },

  //======================================//
  //padding
  paddingTop2px: {
    paddingTop: WidthDimension(0.01),
  },
  paddingBottom2px: {
    paddingBottom: WidthDimension(0.01),
  },
  paddingLeft2px: {
    paddingLeft: WidthDimension(0.01),
  },
  paddingRight2px: {
    paddingRight: WidthDimension(0.01),
  },
  padding2px: {
    padding: WidthDimension(0.01),
  },

  paddingTop5px: {
    paddingTop: WidthDimension(0.02),
  },
  paddingBottom5px: {
    paddingBottom: WidthDimension(0.02),
  },
  paddingLeft5px: {
    paddingLeft: WidthDimension(0.02),
  },
  paddingRight5px: {
    paddingRight: WidthDimension(0.02),
  },
  padding5px: {
    padding: WidthDimension(0.02),
  },

  paddingLeft6px: {
    paddingLeft: WidthDimension(0.022),
  },
  paddingRight6px: {
    paddingRight: WidthDimension(0.022),
  },

  paddingTop10px: {
    paddingTop: WidthDimension(0.04),
  },
  paddingBottom10px: {
    paddingBottom: WidthDimension(0.04),
  },
  paddingLeft10px: {
    paddingLeft: WidthDimension(0.04),
  },
  paddingRight10px: {
    paddingRight: WidthDimension(0.04),
  },
  padding10px: {
    padding: WidthDimension(0.04),
  },

  paddingTop12px: {
    paddingTop: WidthDimension(0.05),
  },

  paddingTop15px: {
    paddingTop: WidthDimension(0.06),
  },
  paddingBottom15px: {
    paddingBottom: WidthDimension(0.06),
  },
  paddingLeft15px: {
    paddingLeft: WidthDimension(0.06),
  },
  paddingRight15px: {
    paddingRight: WidthDimension(0.06),
  },
  padding15px: {
    padding: WidthDimension(0.06),
  },

  paddingTop20px: {
    paddingTop: WidthDimension(0.08),
  },
  paddingBottom20px: {
    paddingBottom: WidthDimension(0.08),
  },
  paddingLeft20px: {
    paddingLeft: WidthDimension(0.08),
  },
  paddingRight20px: {
    paddingRight: WidthDimension(0.08),
  },
  padding20px: {
    padding: WidthDimension(0.08),
  },

  paddingBottom30px: {
    paddingBottom: WidthDimension(0.1),
  },
  paddingBottom40px: {
    paddingBottom: WidthDimension(0.12),
  },

  paddingHorizontal2px: {
    paddingHorizontal: WidthDimension(0.01),
  },
  paddingHorizontal4px: {
    paddingHorizontal: WidthDimension(0.02),
  },
  paddingHorizontal10px: {
    paddingHorizontal: WidthDimension(0.04),
  },
  paddingVertical2px: {
    paddingVertical: WidthDimension(0.01),
  },
  paddingVertical3px: {
    paddingVertical: WidthDimension(0.015),
  },
  paddingVertical5px: {
    paddingVertical: WidthDimension(0.02),
  },
  paddingVertical10px: {
    paddingVertical: WidthDimension(0.04),
  },

  //======================================//
  left2px: {
    left: WidthDimension(0.01),
  },
  right2px: {
    right: WidthDimension(0.01),
  },
  top2px: {
    top: WidthDimension(0.01),
  },
  bottom2px: {
    bottom: WidthDimension(0.0),
  },
  left5px: {
    left: WidthDimension(0.02),
  },
  right5px: {
    right: WidthDimension(0.02),
  },
  top5px: {
    top: WidthDimension(0.02),
  },
  bottom5px: {
    bottom: WidthDimension(0.02),
  },

  //alignments
  alignSelfFS: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfFE: {
    alignSelf: 'flex-end',
  },
  alignSelfStetch: {
    alignSelf: 'stretch',
  },

  alignItemsFS: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFE: {
    alignItems: 'flex-end',
  },

  justifyContentFS: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFE: {
    justifyContent: 'flex-end',
  },
  justifyContentSA: {
    justifyContent: 'space-around',
  },
  justifyContentSB: {
    justifyContent: 'space-between',
  },
  justifyContentSE: {
    justifyContent: 'space-evenly',
  },

  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  textAlignVerticalCenter: {
    textAlignVertical: 'center',
  },

  marginRightAuto: {
    marginRight: 'auto',
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },

  //flex
  flex0_9: {
    flex: 0.9,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },

  //custom shadow
  shadowBlack: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  shadowBlack_1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  // border radius
  borderRadius4px: {
    borderRadius: 4,
  },
  borderRadius8px: {
    borderRadius: 8,
  },

  //font sizes
  font8px: {
    fontSize: WidthDimension(0.02),
  },
  font10px: {
    fontSize: WidthDimension(0.026),
  },
  font12px: {
    fontSize: WidthDimension(0.03),
  },
  font13px: {
    fontSize: WidthDimension(0.031),
  },
  font14px: {
    fontSize: WidthDimension(0.034),
  },
  font15px: {
    fontSize: WidthDimension(0.036),
  },
  font16px: {
    fontSize: WidthDimension(0.038),
  },
  font18px: {
    fontSize: WidthDimension(0.043),
  },
  font20px: {
    fontSize: WidthDimension(0.047),
  },
  font22px: {
    fontSize: WidthDimension(0.05),
  },
  font24px: {
    fontSize: WidthDimension(0.055),
  },
  font26px: {
    fontSize: WidthDimension(0.06),
  },

  //font family
  fontPoppinsRegular: {
    fontFamily: 'Poppins-Regular',
  },
  fontPoppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },

  fontPoppins_bold: {
    fontFamily: 'Poppins-Bold',
  },
  fontPoppins_medium: {
    fontFamily: 'Poppins-Medium',
  },
  fontPoppins_regular: {
    fontFamily: 'Poppins-Regular',
  },
  fontPoppins_semiboldItalic: {
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  fontPoppins_semibold: {
    fontFamily: 'Poppins-SemiBold',
  },

  // width

  width10Percentage: {
    width: '10%',
  },
  width20Percentage: {
    width: '20%',
  },
  width30Percentage: {
    width: '30%',
  },
  width50Percentage: {
    width: '50%',
  },
  width60Percentage: {
    width: '60%',
  },
  width80Percentage: {
    width: '80%',
  },
  width90Percentage: {
    width: '90%',
  },
  width94Percentage: {
    width: '94%',
  },
  width96Percentage: {
    width: '96%',
  },
  width98Percentage: {
    width: '98%',
  },
  width100Percentage: {
    width: '100%',
  },

  tabHeader:{
    paddingVertical:10,
    width:'100%',
    alignSelf:'center',
    backgroundColor:colors.backgroundColor,
    paddingHorizontal:'3%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tabUnderline:{height: 3, backgroundColor: colors.primary,borderRadius:10}
};

export {sizes, fontfamily, baseStyle, colors};
