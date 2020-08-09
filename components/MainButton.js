import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from './../constants/colors';

const MainButton = ({style, onPress, children}) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.wrapper}>
      <ButtonComponent activeOpacity={0.8} onPress={onPress}>
        <View style={{...styles.container, ...style}}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 26,
    height: 38,
  },
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default MainButton;
