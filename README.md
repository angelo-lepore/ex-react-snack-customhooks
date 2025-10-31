## Consegna

```jsx
Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare utilizzare l'url base:
https://boolean-spec-frontend.vercel.app/freetestapi
al posto di:
https://freetestapi.com/api/v1

Ad esempio:
https://boolean-spec-frontend.vercel.app/freetestapi/users
per chiamare l'endpoint /users
```

## 🏆 Snack 1: <span style="color:red">useSwitch()</span> – Toggle Booleano

Creare un **_custom hook_** per alternare un valore booleano tra true e false.

**_Cosa deve fare?_**

- Inizialmente false.

- Ritorna **_il valore attuale e una funzione toggle()_** per cambiarlo.

- Quando toggle() viene chiamato, il valore passa da true → false e viceversa.

**_Esempio di utilizzo:_**

```jsx
import useSwitch from "./useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App;
```

## 🏆 Snack 2: <span style="color:red">useDate()</span> – Ottenere la Data Attuale

Creare un **_custom hook_** che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

**_Cosa deve fare?_**

- Restituisce un oggetto con **_data e ora formattata_**.

- Si aggiorna automaticamente ogni secondo.

- Usa **_useEffect()_** per gestire l’aggiornamento.

**_Esempio di utilizzo:_**

```jsx
import useDate from "./useDate";

function App() {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;
```

## 🏆 Snack 3: <span style="color:red">useCustomPointer()</span> – Cambia il Cursore del Mouse

Creare un **_custom hook_** che sostituisca il cursore del mouse con un **_componente personalizzato_**.

**_Cosa deve fare?_**

- Prende in input una **_stringa_** o un **_JSX component_** (es. un’emoji, un'icona, un'animazione).

- Posiziona il componente al posto del puntatore del mouse.

- Il componente segue i movimenti del mouse.

**_Esempio di utilizzo:_**

```jsx
import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;
```

## 🎯 Bonus: <span style="color:red">useKeyPress()</span> – Rilevare un Tasto Premuto

Creare un **_custom hook_** che rilevi **_se un tasto specifico della tastiera è premuto_**.

**_Cosa deve fare?_**

- Prende in input il nome di un tasto ("Enter", "Escape", ecc.).

- Ritorna true quando il tasto è premuto e false quando viene rilasciato.

- Usa **_event listener su keydown e keyup_**.

**_Esempio di utilizzo:_**

```jsx
import useKeyPress from "./useKeyPress";

function App() {
  const isEnterPressed = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
  );
}

export default App;
```
