import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), goal: enteredGoal },
    ]);
    // setEnteredGoal('');
  };

  return (
    <View style={styles.rootContainer}>
      <GoalInput handleAddGoal={handleAddGoal} />
      <FlatList
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.goal} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
});
