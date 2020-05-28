import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
    console.log(goals);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.goalInputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={handleAddGoal} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 50,
    width: '30%',
  },
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
