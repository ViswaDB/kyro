import React from 'react';
import {View, Text, Image} from 'react-native';
import {strings} from '../../constant';
import {baseStyle, colors} from '../../constant/theme';
import styles from './styles';
import {iconpathurl} from '../../constant/iconpath';
import Spacer from '../spacer';

const EmptyComponent = () => {

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={iconpathurl.clockIon}
        style={styles.clock}
      />
      <Spacer height={10}/>
      <Text style={baseStyle.txtStylePoppinsMedium(0.035, colors.primary)}>
        {strings.empty}
      </Text>
      <Text style={baseStyle.txtStylePoppinsMedium(0.035, colors.primary)}>
        {strings.boost}
      </Text>
    </View>
  );
};

export default EmptyComponent;
