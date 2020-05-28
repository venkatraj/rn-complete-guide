import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  const { title } = props;
  return (
    <View style={styles.goalItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
