import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'



ReactDOM.render( <App />, document.getElementById('app'));

if (module.hot){
    module.hot.accept(function (res) {
        console.log("执行了")
        res()
    })
}
