import {useState} from "react"
import Form from './components/Form';
import './App.css';
import Header from './components/Header';
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);


  return (
    <div className="container">
      <div className="wrapper">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
      />
      <List
        list={list}
        setList={setList}
      />
       
      </div>
    </div>
  );
}

export default App;
