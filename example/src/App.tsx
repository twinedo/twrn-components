import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'twrn-components';
export default function App() {

  return (
    <View style={styles.container}>
      <Button text='Test' />
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
