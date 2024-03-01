import { createContext, useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const MyContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <MyContext.Provider value={{ counter, setCounter }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </MyContext.Provider>
    </div >
  );
}

export default App;
