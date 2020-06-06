import React, { Component ,Suspense, lazy} from "react";
import {hot} from 'react-hot-loader'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( <div><p>要加好学习啊</p></div>);
    }
}

export default hot(module)(App);



