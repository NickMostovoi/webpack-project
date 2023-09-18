import React from "react";
import ReactDOM from "react-dom/client"
import './babel';
import App from "@components/App";
import "./styles/styles.css";
import "./styles/scss.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);