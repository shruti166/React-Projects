import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>WELCOME TO REDUX </h1>
      <div className="container">
        <h1>Increment/Decrement</h1>
        <div className="quantity">
          <a className="quantity_minus">
            <span>-</span>
          </a>
          <input name="quantity" type="text" value="0" />
          <a className="quantity_plus">
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
