import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState(new Set());

  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    setGoals((currentGoals) => new Set(currentGoals).add(enteredGoal));
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
      <ScrollView>
        {Array.from(goals).map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 50,
    paddingHorizontal: 15,
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
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
