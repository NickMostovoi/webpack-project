import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "@redux/reducers";
import Counter from "./Counter";
import AnalyticsCounter from "./AnalyticsCounter";
import Post from "./Post";

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <Post />
            <AnalyticsCounter />
            <Counter />
        </Provider>
    );
}

export default App;