import{ getDatabase, ref, set } from 'firebase/database';
import { app } from "./firebase"
import './App.css';

const db = getDatabase(app);

function App() {

  const putData = () => {
    set(ref(db,'users/shruti'), {
      id: 1,
      name: 'Shruti',
      age: 21
    })
  }
  return (
    <div className="App">
      <h1>FireBase React App</h1>
      <h2>hi</h2>
      <button onClick = {putData}>Put Data</button>
    </div>
  );
}

export default App;
