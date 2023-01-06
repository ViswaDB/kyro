import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SCREENS} from '../../constant';
import NavigationService from '../../navigation/NavigationService';
import CustomSafeArea from '../../components/customSafeArea';
import {colors} from '../../constant/theme';
import Button from '../../components/button';

function LoginScreen(props) {
  useEffect(() => {}, []);

  return (
    <CustomSafeArea
      backgroundColor={colors.backgroundColor}
      style={styles.container}>
      <Button
        text="Go To Home Screen"
        onPress={() => {
          NavigationService.navigate(SCREENS.MYTABS);
        }}
        height={0.04}
        width={'90%'}
        textWeight={'bold'}
        textColor={colors.white}
        textSize={hp('2%')}
      />
    </CustomSafeArea>
  );
}

const mapStateToProps = state => ({});

const Actions = {};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
