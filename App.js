import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./src/reducers";
import Navigator from './src/Navigator'

export default class App extends Component {
    render() {
        const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        )

    }
}