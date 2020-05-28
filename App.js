import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50, width: '30%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
            margin: 10,
            flexGrow: 1,
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}
