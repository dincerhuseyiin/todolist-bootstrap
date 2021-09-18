import React from "react";
import {Button} from "react-bootstrap"


const Form = ({input, setInput, list, setList}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list,{id: Math.floor(Math.random()*1000), value:input, completed:false}])
    setInput("");
  }



  const onChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
        <form onSubmit={onSubmit}>
              <input
                  placeholder="your task.."
                  type="text"
                  onChange={onChange}
                  value={input}
                  required
              /> 
        <Button type="submit" variant="outline-info">Add</Button>{' '}
        </form>
    </div>
  );
};

export default Form;
