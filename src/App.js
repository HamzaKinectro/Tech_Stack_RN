import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/commons";
import LibraryList from "./LibraryList";
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Technology Stack" />
        <Text>Hello World</Text>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
