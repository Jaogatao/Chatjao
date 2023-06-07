
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header.jsx"
import Prompt from "./components/Prompt.jsx"
export default function App() {
  return (
    <View style={styles.container}>
      <Header/> 
      <Prompt/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
  },
});
