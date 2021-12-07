import React from 'react';
import Home from '../Home/Home';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';


function handledone(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
            <Route  index element={<Home/>}/>
          </Routes>
          </BrowserRouter>
        </div>
        )
}
export default handledone;