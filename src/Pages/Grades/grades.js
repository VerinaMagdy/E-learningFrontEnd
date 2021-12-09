
import axios from 'axios';
import React from 'react';
import {QueryClient, QueryClientProvider,useQuery} from 'react-query'
import './grades.css';

const baseURL = "http://127.0.0.1:3008";
// const queryClient = new QueryClient();
async function fetchRows(){
    const {data} = await axios.get(`${baseURL}/api/instructor/viewGrades`)
    // console.log(data)
    return data
}

function Grades (){
    const {data, error, isError, isLoading } = useQuery('rows', fetchRows)
    console.log(data)
    if(isLoading){
        return <div>Loading...</div>
    }
    else if(isError){
        return <div>Error! {error.message}</div>
    }else if(data){
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
                    {
                        data.map(({student_id,username,quiz_1})=>{
                           return <tr key={student_id}>
                                <td>{username}</td>
                                <td>{student_id}</td>
                                <td>{quiz_1}</td>
                            </tr>
                            
                        })
                    }

                {/* <tr>
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
            
           */}

            </tbody>
        </table>
    </div>
    
   )
    }
    
}







export default Grades