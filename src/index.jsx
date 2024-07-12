import React from 'react';
import {Header} from "./components/header.async.js";
import {Main} from "./components/main.async.js";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
