import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Question from './Pages/Questions/question';
import Quiz from './Pages/Quiz/quiz';
import Grades from './Pages/Grades/grades';
import LoginStudent from './Pages/LoginStudent/LoginStudent';
import Quizzes from './Pages/StudentQuiz/quizzes';
import Attempt from './Pages/AttemptQuiz/attempt';
import Review from './Pages/Review/review';

class App extends React.Component{
  state={
    isLog:false
  }
  
  handleLogin=(isLog) =>this.setState({isLog})
  render(){
    const{isLog}=this.state;
return(
<div>
<BrowserRouter>
<Routes>
    {/* <Route exact path='/Login' render={()=> !isLog ?<Login isLogin={this.handleLogin}/>:<Home/> }/> */}
    <Route  path='/Login' element={<Login />}/>
    <Route  path='/LoginStudent' element={<LoginStudent />}/>
    <Route path='/LoginStudent/quizzes/:student_id' element={<Quizzes/>}/>
    <Route path='/LoginStudent/quizzes/attempt/:student_id/:quiz_id' element={<Attempt/>}/>
    <Route  path='/Login/Home/:instructor_id' element={<Home/>}/>
    <Route  path='/Login/Home/QuestionBank/:instructor_id' element={<Question/>}/>
    <Route  path='/Login/Home/createquiz/:instructor_id' element={<Quiz/>}/>
    <Route  path='/Login/Home/viewgrades/:instructor_id' element={<Grades/>}/>
    <Route  path='/LoginStudent/quizzes/attempt/review/:student_id/:quiz_id' element={<Review/>}/>

  </Routes>
  </BrowserRouter>
</div>
)
  }
}

export default App;
