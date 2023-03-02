
import { useState,useEffect } from 'react';
import './App.css';
import Form from './components/form/Form';

function App() {
  const [ref,setRef] = useState([]);
  const [list,setList] = useState([]);
  return (
    <div className="App">
      <Form list ={list} setList={setList} setRef = {setRef}/>
    </div>
  );
}

export default App;
