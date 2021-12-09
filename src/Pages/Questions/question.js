import React from 'react';
import './question.css';
import { useState } from 'react';
import axios from "axios";

const baseURL = "http://127.0.0.1:3008";

 

  function Question (){

    const [inputList, setInputList] = useState([{ question: "", CorrectAnswer1: "" ,Answer2: "" ,Answer3: "" ,Answer4: "" }]);
    
      const [post, setPost] = React.useState(null);
      
      
      function createPost() {
        axios
          .post(`${baseURL}/api/questionbank/addquestion`, {
            question:splits[0],
        right_answer:splits[1],
        wrong_answers:[
          splits[2],
          splits[3],
          splits[4]
        ]
          })
          .then((response) => {
            setPost(response.data);
          });
      }
      const stringData = inputList.reduce((result, item) => {
        return `${result}${item.question},${item.CorrectAnswer1},${item.Answer2},${item.Answer3},${item.Answer4}|`
      }, "")
       var splits = stringData.split(','); //console.log(splits); 
       //if (!post) return "No post!"
    

    
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
      



//console.log(stringData)
     
        return(
            <div className="App">
            <h2>Question Bank</h2>
            {inputList.map((x, i) => {
              return (
                <div className="box">
                  <input
                    id="qu"
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
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>*/}
            <button id="submit" onClick={createPost} >Submit</button> 
          </div>
        );
      }
      
     

export default Question;