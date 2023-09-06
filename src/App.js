import SearchAndDisplay from "./components/SearchAndDisplay.js";
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

            <SearchAndDisplay />
            {/* <SearchComponent /> */}

            {/* <ItemDisplay /> */}
        </div >

    );
}

export default App;
