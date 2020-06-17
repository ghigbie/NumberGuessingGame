import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children, style}) => {
  return <View style={{...styles.card, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#aaa',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: '#fff',
    elevation: 6,
    padding: 22,
    borderRadius: 12,
  },
});

export default Card;
