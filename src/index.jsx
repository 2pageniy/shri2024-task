import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./components/header.async.js";
import {Main} from "./components/main.async.js";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
