import './App.css';
import ItemDisplay from "./components/ItemDisplay";

function clearConsole() {
    console.clear();
}

function App() {

    return (
        <div>
            <h1>
                Hello Boss
            </h1>

            <ItemDisplay />

            <button onClick={clearConsole}>
                Clear Console
            </button>
        </div >

    );
}

export default App;
