import React from 'react';
import './question.css';
import { useState } from 'react';


function Question (){
    const [inputList, setInputList] = useState([{ question: "", CorrectAnswer1: "" ,Answer2: "" ,Answer3: "" ,Answer4: "" }]);
    
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };   
      const handleAddClick = () => {
        setInputList([...inputList, { question: "", CorrectAnswer1: "" ,Answer2: "" ,Answer3: "" ,Answer4: "" }]);
      };
        return(
            <div className="App">
            <h2>Question Bank</h2>
            {inputList.map((x, i) => {
              return (
                <div className="box">
                  <input
                    name="question"
                    placeholder="Enter Your Question"
                    value={x.question}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="ml10"
                    name="CorrectAnswer1"
                    placeholder="Enter Correct Answer1"
                    value={x.CorrectAnswer1}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="ml20"
                    name="Answer2"
                    placeholder="Enter Answer2"
                    value={x.Answer2}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="ml30"
                    name="Answer3"
                    placeholder="Enter Answer3"
                    value={x.Answer3}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="ml40"
                    name="Answer4"
                    placeholder="Enter Answer4"
                    value={x.Answer4}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <div className="btn-box">
                    {inputList.length !== 1 && <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                  </div>
                </div>
              );
            })}
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
            <button id="submit" >Submit</button>
          </div>
        );
      }
      
      

export default Question;