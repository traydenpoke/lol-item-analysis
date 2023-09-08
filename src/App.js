import ItemDisplay from "./pages/ItemDisplay.js";
import "./styles/ItemDisplay.css";


function clearConsole() {
    console.clear();
}

function App() {

    return (
        <div>
            <button onClick={clearConsole}>
                Clear Console
            </button>

            <ItemDisplay />
        </div >

    );
}

export default App;
