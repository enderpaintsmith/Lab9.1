
import Button from "./components/Button";

function App() {
    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <div>
            <h1>Lab 9.1 — Component Basics</h1>
            <p>Testing reusable React components with TypeScript.</p>

            <Button
                label="Click Me"
                onClick={handleClick}
            />

            <Button
                label="Disabled Button"
                onClick={handleClick}
                disabled={true}
            />
        </div>
    );
}

export default App;
