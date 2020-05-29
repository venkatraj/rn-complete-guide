import React, { useState } from 'react';
import { Button, Modal, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const { visible, onCancel, handleAddGoal } = props;
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleOnAdd = () => {
    handleAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  const handleOnCancel = () => {
    onCancel();
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.goalInputContainer}>
        <View>
          <TextInput
            placeholder="Course Goal"
            onChangeText={handleGoalInput}
            value={enteredGoal}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={handleOnCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={handleOnAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 2,
    width: 250,
    marginBottom: 10,
    lineHeight: 1,
  },
  buttonContainer: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 80,
  },
});

export default GoalInput;
