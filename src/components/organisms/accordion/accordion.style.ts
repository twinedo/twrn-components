import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 8,
  },
  animatedContainer: {
    overflow: 'hidden',
  },
  header: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});
