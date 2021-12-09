import React from 'react';
import axios from "axios";
import './review.css';
import { useState } from 'react';

const baseURL = "http://127.0.0.1:3008/api/quiz/preview";
function Review(){
    const [post, setPost] = React.useState(null);
    function finalreview(){
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      console.log(post);
      if (!post) return null;
    }
    return(

        <label>Your Grade: </label>
        //finalreview not called when button
    )


}


export default Review;