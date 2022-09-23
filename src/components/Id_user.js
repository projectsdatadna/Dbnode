import React from 'react';

//Axios for get request
import axios from 'axios';
class Id_user extends React.Component {
 //initialize an object's state in a class
  constructor(props) {
    super(props)
      this.state = {
        data: []
              }
      }
      //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
      componentDidMount(){
        //get request
        axios.get('http://localhost:3001/get').then(res => 
        {
        
        this.setState({data: res.data});
           }); 
        
          }
    
 
  render() {
   
    return (
     
      <div className="maincontainer">
       
        <h1 className="mr-5 ml-5 mt-5">my name</h1>
        <div className="container mb-5 mt-5 text-left">
        
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>firstname</th>
              <th>secondname</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.firstname}</td>
                  <td>{result.secondname}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
       
            
      </div>
     
      </div>
     
)
};
}
export default Id_user;