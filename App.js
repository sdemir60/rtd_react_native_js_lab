import React from "react";
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
