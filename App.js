import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from "./components/Title";
import User from "./components/User";
import Users from "./components/Users";

const App = () => {
  return (
    <View style={styles.container}>
      <Title text="React Native" color={"red"} number={1} />
      <Title text="React" color="green" number={2} />
      <Title text="javascript" color="blue" number={5} />
      <User data={{ id: 1, name: "Mehmet" }} />
      <Users data={['Ahmet', 'Mehmet',"Ayşe","Fatma"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
