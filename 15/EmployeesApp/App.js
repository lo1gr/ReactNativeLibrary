import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import EmployeeApp from './src/EmployeeApp';

const initialState = {
  1: {
    empid: 1,
    empName: "Employee One",
    empsalary: 10000.0
  },
  2: {
    empid: 2,
    empName: "Employee Two",
    empsalary: 20000.0
  },
  3: {
    empid: 3,
    empName: "Employee Three",
    empsalary: 30000.0
  },
  4: {
    empid: 4,
    empName: "Employee Four",
    empsalary: 40000.0
  },
  5: {
    empid: 5,
    empName: "Employee Five",
    empsalary: 50000.0
  }

};

const reducer = (state = initialState, action) => {

  let initialSalary;
  let increment;
  let newSalary;
  let employeeObject;

  if (action.id) {
    initialSalary = state[action.id].empSalary;
    increment = (initialSalary /100)*20
  }

  switch(action.type) {
    case "GOOD_PERFORMANCE":
    newSalary = initialSalary + increment;
    employeeObject = state[action.id];
    employeeObject.empSalary = newSalary;
    //return new state
    return Object.assign({},state);


    case "BAD_PERFORMANCE":
    newSalary = initialSalary - increment;
    employeeObject = state[action.id];
    employeeObject.empSalary = newSalary;
    //return new state
    return Object.assign({},state)
  }
  return state;
}

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <EmployeeApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
