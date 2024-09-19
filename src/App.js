import logo from "./logo.svg";
import "./App.css";
import TicketWidget from "./components/TicketWidget";

function App(props) {
    return (
        <div>
            <TicketWidget
                apiBaseUrl="https://localhost:5001/api"
                apiKey={props.apiKey}
            />
        </div>
    );
}

export default App;

