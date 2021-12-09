import React, { Component } from 'react';
import './question.css';
import { useState } from 'react';

class Question extends Component{
    render(){
        const id = this.props.question.id
        const question= this.props.question.question
        const choices = this.props.question.choices
        return(
            <div className="box">
                  <p
                    id="qu"
                    name="question"
                    >{question}</p>
                    {
                        choices.map(choice=>{
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
                    {inputList.length !== 1 && <button
                      className="mr10"
                      onClick={() => this.props.handleRemoveClick(id)}>Remove</button>}
                  </div>
                </div>
        )
    }
}
export default Question