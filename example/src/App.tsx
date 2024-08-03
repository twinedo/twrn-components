import { StyleSheet, View, Text } from 'react-native';
import { Accordion, Button, Spacer } from 'twrn-components';
export default function App() {

  return (
    <View style={styles.container}>
      <Button text='Test' />
      <Text>Result</Text>
      <Spacer height={300} />
      <Accordion title='Press' disabled={true} >
        <Text>kjawndjbawd akwjdnawd akjwda wdkawjdaw d</Text>
        <Text>kjawndjbawd akwjdnawd akjwda wdkawjdaw d</Text>
        <Text>kjawndjbawd akwjdnawd akjwda wdkawjdaw d</Text>
        <Text>kjawndjbawd akwjdnawd akjwda wdkawjdaw d</Text>
      </Accordion>

    </View>
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
