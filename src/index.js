import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TicketWidget from "./TicketWidget";

(function () {
    window.onload = function () {
        console.log("Widget script loaded");
        const container = document.getElementById("ticket-widget-container");
        if (container) {
            console.log(
                "Initializing widget with businessId and apiBaseUrl..."
            );
            const root = ReactDOM.createRoot(container);
            root.render(
                <TicketWidget apiKey={container.getAttribute("data-api-key")} />
            );
        } else {
            console.error(
                'No element with ID "ticket-widget-container" found.'
            );
        }
    };
})();

// window.TicketWidget = {
//     init: (config) => {
//         const { apiKey, apiBaseUrl } = config;
//         const container = document.getElementById("ticket-widget-container");
//         if (container) {
//             const root = ReactDOM.createRoot(container); // Use createRoot instead of render
//             root.render(
//                 <TicketWidget apiKey={apiKey} apiBaseUrl={apiBaseUrl} />
//             );
//         } else {
//             console.error("Ticket widget container not found!");
//         }
//     }
// };

// widgetDivs.forEach((div) => {
//     const root = ReactDOM.createRoot(div);
//     root.render(
//         <React.StrictMode>
//             <App
//                 apiKey={div.dataset.apiKey}
//                 apiBaseUrl={div.dataset.apiBaseUrl}
//             />
//         </React.StrictMode>
//     );
// ReactDOM.render(
//     <React.StrictMode>
//         <App
//             apiKey={div.dataset.apiKey}
//             apiBaseUrl={div.dataset.apiBaseUrl}
//         />
//     </React.StrictMode>,
//     div
// );
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

