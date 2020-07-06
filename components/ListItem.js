import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './../components/Card';
import Colors from './../constants/colors';

const ListItem = ({item, style}) => (
  <Card style={styles.cardStyles}>
    <View style={{...styles.itemContainer, ...style}}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  cardStyles: {
    marginVertical: 4,
  },
  itemContainer: {
    height: 22,
  },
  itemText: {
    fontSize: 22,
    height: 26,
    paddingLeft: 4,
    fontFamily: 'OpenSans-Regular',
    color: Colors.primary,
  },
});

export default ListItem;
