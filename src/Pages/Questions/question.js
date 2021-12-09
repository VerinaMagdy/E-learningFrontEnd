import React from 'react';
import './question.css';
import { useState } from 'react';
import {QueryClient, QueryClientProvider,useQuery} from 'react-query'
import axios from "axios";

const baseURL = "http://127.0.0.1:3008";

async function fetchRows(){
  const {data} = await axios.get(`${baseURL}/api/questionbank/show`)
  // console.log(data)
  return data
}
 

  function Question (){
    const [inputList, setInputList] = useState([{ question: "", CorrectAnswer1: "" ,Answer2: "" ,Answer3: "" ,Answer4: "" }]);
    
    const [post, setPost] = React.useState(null);
    const {data, error, isError, isLoading } = useQuery('rows', fetchRows)
    if(isLoading){
        return <div>Loading...</div>
    }
    else if(isError){
        return <div>Error! {error.message}</div>
    }else if(data){
    // let questions=[];
    
      
    function createPost() {
      axios.post(`${baseURL}/api/questionbank/addquestion`, {
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
       var splits = stringData.split(','); 
    
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
      function handleDelete(id){
        axios.delete(`http://127.0.0.1:3008/api/questionbank/delete/${id}`)
      }
      
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
            {/* {items.map((item,index)=>{
              return <li key={index}>{item}</li>
            })} */}
            {
              // axios
              // .get(`${baseURL}/api/questionbank/show`)
              // .then(response => {
              //   questions=response.data;
                data.map(question=>{
                // console.log(question)
                // return <p>{question.question}</p>
                return (
                  <div key={question.question_id}className="box">
                  <p
                    id="qu"
                    name="question"
                    >{question.question}</p>
                    {
                        question.choices.map(choice=>{
                            return <p>{choice}</p>
                        })
                    }
                  {/* <p
                    className="ml10"
                    name="CorrectAnswer1"
                  >{choices[0]}</p>
                  <p
                    className="ml20"
                    name="Answer2"
                    >{choices[1]}</p>
                  <p
                    className="ml30"
                    name="Answer3"
                    >{choices[2]}</p>
                  <p
                    className="ml40"
                    name="Answer4"
                    >{choices[3]}</p> */}
                  <div className="btn-box">
                    {<button
                      className="mr10"
                      key={question.question_id}
                      onClick={()=>handleDelete(question.question_id)}>Remove</button>}
                  </div>
                </div>
                )
              // })
              })
            }
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>*/}
            <button id="submit" onClick={createPost} >Submit</button> 
          </div>
        );
      }
    }
      
     

export default Question;