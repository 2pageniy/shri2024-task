import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./components/header.jsx";
import {Main} from "./components/main.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
