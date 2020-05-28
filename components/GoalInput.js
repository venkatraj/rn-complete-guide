import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const { handleAddGoal } = props;
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.goalInputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={handleGoalInput}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => handleAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  goalInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    margin: 10,
    flexGrow: 1,
  },
});

export default GoalInput;
