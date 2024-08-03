import { StyleSheet, View, Text } from 'react-native';
import { Button, Dropdown } from 'twrn-components';
export default function App() {

  const dataDropdown = [
    {
      id: '1',
      value: 'A'
    },
    {
      id: '2',
      value: 'B'
    },
  ]

  return (
    <View style={styles.container}>
      <Button text='Test' />
      <Text>Result</Text>
      <Dropdown placeholder='Select' data={dataDropdown} keyValue='value' onSelect={(selectedItem, index) => console.log('selectedItem', selectedItem.value+index)} />
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
