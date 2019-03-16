import React, {Component} from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation';
import SearchPage from './components/SearchPage'
import ResultPage from './components/ResultsPage'

const AppNavigator = createStackNavigator(
    {
      SearchPage: { screen: SearchPage },
      ResultPage: { screen: ResultPage },
    },
    {
      headerMode: 'none',
      navigationOptions: {
        gesturesEnabled: true,
      },
    }
  );
  
  

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}