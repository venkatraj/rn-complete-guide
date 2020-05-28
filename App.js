import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View
      style={{ padding: 50, height: 400, width: '30%', flexDirection: 'row' }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={{ padding: 50, width: '30%' }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <TextInput
//           placeholder="Course Goal"
//           style={{
//             borderColor: 'black',
//             borderWidth: 1,
//             padding: 5,
//             margin: 10,
//             flexGrow: 1,
//           }}
//         />
//         <Button title="ADD" />
//       </View>
//       <View></View>
//     </View>
//   );
// }
