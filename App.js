import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log(goals);

  const handleAddGoal = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), goal: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const handleCancelGoal = () => {
    setIsAddMode(false);
  };

  const handleDeleteGoal = (itemID) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== itemID);
    });
  };

  return (
    <View style={styles.rootContainer}>
      <Button
        visible={isAddMode}
        title="Add New Goal"
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput
        visible={isAddMode}
        onCancel={handleCancelGoal}
        handleAddGoal={handleAddGoal}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            itemID={itemData.item.id}
            onDelete={handleDeleteGoal}
            title={itemData.item.goal}
          />
        )}
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
