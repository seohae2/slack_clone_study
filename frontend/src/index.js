import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./GlobalStyle";

// App 컴포넌트를 'root'라는 ID를 가진 DOM에 씌운다는 의미이다.
// index.html 에 'root' ID를 가진 DOM 이 있다.
ReactDOM.render(
    <>
    <App />
    <GlobalStyle></GlobalStyle>
    </>, 
    document.getElementById('root')
);
