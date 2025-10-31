// Snack 1
import useSwitch from "./useSwitch";
// Snack 2
import useDate from "./useDate";
// Snack 3
import useCustomPointer from "./useCustomPointer";

function App() {
  // Snack 1
  const [isOn, toggle] = useSwitch();
  // Snack 2
  const currentDate = useDate();
  // Snack 3
  const customPointer = useCustomPointer("🔥");
  return (
    <>
      {/* Snack 1 */}
      <div>
        <h5 style={{ color: "red" }}>Snack 1</h5>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      {/* Snack 2 */}
      <div>
        <h5 style={{ color: "red" }}>Snack 2</h5>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
      {/* Snack 3 */}
      <div>
        <h5 style={{ color: "red" }}>Snack 3</h5>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>
  );
}

export default App;
