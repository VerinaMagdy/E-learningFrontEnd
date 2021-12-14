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