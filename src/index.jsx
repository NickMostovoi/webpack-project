import React from "react";
import ReactDOM from "react-dom/client"
import './babel';
import Post from "@models/Post";
import "./styles/styles.css";
import "./styles/scss.scss"

const post = Post('Webpack post title');

console.log(post);

const App = () => {
    return (
        <div className="container">
            <div className="logo"></div>
            <div className="title">Webpack project</div>
            <div className="counterWrapper">
                <span>Clicks:</span>
                <span className="counter">0</span>
            </div>
            <div className="box">
                <h3>SCSS</h3>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);