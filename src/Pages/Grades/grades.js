
import React from 'react';
import './grades.css';


function Grades (){
    
    return(<div id="d1">
        <div id="hd"><h1>View Grades</h1></div>
        
        <div className='img'>
    <head> <base href="/"/> </head>
    <div id="imgdiv">
        <img  src="./images/grades.jpg"/>
        </div>
      </div>
        <table className="center">
            <thead>
            <tr>  <th></th>
                  <th></th>
                    <th>studentName</th>
                    <th>studentId</th>
                    <th>studentGrade</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Quiz 1</td>
                    <td></td>
                    <td> - </td>
                    <td> - </td>
                    <td> 0 </td>
                    

                </tr>
                <tr>
                <td>Quiz 2</td>
                    <td></td>
                    <td> - </td>
                    <td> - </td>
                    <td> 0 </td>
                    

                   
                </tr>
                <tr>
                <td>Quiz 3</td>
                <td></td>
                    <td> - </td>
                    <td> - </td>
                    <td> 0 </td>
                    
                </tr>
            
          

            </tbody>
        </table>
    </div>
    
   )
}







export default Grades;