import ItemDisplay from "./components/ItemDisplay";
import { SearchBar, GetMatches, GetSetText } from "./components/SearchBar";


function clearConsole() {
    console.clear();
}

function App() {

    return (
        <div>
            <h1>
                Hello Boss
            </h1>

            <button onClick={clearConsole}>
                Clear Console
            </button>

            <ItemDisplay />
        </div >

    );
}

export default App;
