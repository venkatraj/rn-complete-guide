import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  const { itemID, title, onDelete } = props;
  const onPressHandler = () => {
    onDelete(itemID);
  };
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.goalItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
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
