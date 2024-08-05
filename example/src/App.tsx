import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Grid, Spacer } from 'twrn-components';
export default function App() {

  const data = [
    {
      id: '1',
      name: 'John',
      number: 'xxx'
    },
    {
      id: '2',
      name: 'Lorem',
      number: 'xxx'
    },
    {
      id: '3',
      name: 'Ipsum',
      number: 'xxx'
    },
    {
      id: '4',
      name: 'John Doe',
      number: 'xxx'
    },
    {
      id: '5',
      name: 'Sit Doler amet',
      number: 'xxx'
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button text='Test' />
        <Text>Result</Text>
        <Spacer height={300} />
        <Grid data={data} id="id" gridSize={4} itemComponentHeight={400} itemComponent={(item, index) => <View style={{
          margin: 8,
          padding: 16,
          backgroundColor: '#f0f0f0',
          justifyContent: 'center',
          alignItems: 'center',
        }}><Text>{item.name}</Text></View>} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  animatedContainer: {
    overflow: 'hidden',
    // position: 'absolute'
  },
  content: {
    padding: 10,
    backgroundColor: 'red',
    width: 200

  },
  wrapper: {
    position: 'absolute',
    zIndex: 20,
    borderWidth: 1,
  },
  expanded: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  collapsed: {
    borderRadius: 10,
  }
});
