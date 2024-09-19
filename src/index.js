import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const widgetDivs = document.querySelectorAll(".tockzy-ticket-widget");

widgetDivs.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(
        <React.StrictMode>
            <App
                apiKey={div.dataset.apiKey}
                apiBaseUrl={div.dataset.apiBaseUrl}
            />
        </React.StrictMode>
    );
    // ReactDOM.render(
    //     <React.StrictMode>
    //         <App
    //             apiKey={div.dataset.apiKey}
    //             apiBaseUrl={div.dataset.apiBaseUrl}
    //         />
    //     </React.StrictMode>,
    //     div
    // );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

