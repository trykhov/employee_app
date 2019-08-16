import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeApp from './src/EmployeeApp';

const initState = {
  1: {
    empID: 1,
    empName: "Employee One",
    empSalary: 100000.00
  },
  2: {
    empID: 2,
    empName: "Employee Two",
    empSalary: 200000.00
  },
  3: {
    empID: 3,
    empName: "Employee Three",
    empSalary: 300000.00
  }
};

const reducer = (state = initState, action) => {
  let initialSalary;
  let increment;
  let newSalary;
  let employeeObject;
  if(action.id) {
    initialSalary = state[action.id].empSalary;
    increment = (initialSalary / 100) * 20;
  }

  switch(action.type) {
    case "GOOD_PERFORMANCE":
      newSalary = initialSalary + increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      return Object.assign({}, state);
    case "BAD_PERFORMANCE":
      newSalary = initialSalary - increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      return Object.assign({}, state);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
