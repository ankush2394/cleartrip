import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'


class Filter extends Component {

  constructor(props){
        super(props);
        this.state={
            val:"",
            locationstoring:[{}]
        }
    }

  func(){

      fetch("http://starlord.hackerearth.com/kickstarter")
      .then(d => d.json())
      .then(d => {
        var list=[{}]
        
        for(var key in d) {
        
         if(this.state.val!="" && this.state.val==d[key].location){
            list.push(d[key]);
            console.log(d[key].location,this.state.val);
            console.log(d[key]);
       }
        
        }
        //everything in list as json
        console.log(list)
        this.setState({locationstoring:list});
       

      })

    //console.log(thival)

  }
  render() {
    
      if(this.state.locationstoring.size>1)
      {}
      else  this.state.locationstoring.shift();

      if(this.state.locationstoring==""){
        return(
          
            <div className="yellow lighten-4">
            <Header />
            <br />
              <input type="text" placeholder="Filter :Enter exact location.." value={this.state.val} onChange={(e)=>{this.setState({val:
                e.target.value});}}></input>
              <br />
              <center><button className="btn" onClick={()=>{this.func();}}> Submit</button></center>
              </div>
              );
      }
        else{
          return(
            <div className="cyan accent-1">
            <Header />

            <h4>Location :{this.state.val}</h4>
            <h4>Projects :</h4>
            <ul className="collection with-header">
          {
                
                  this.state.locationstoring.map(function(op,id){
                  return(
                  <div>
                    <li className ="yellow lighten-4 collection-item" key={id}>
                      {op.title}<Link to={"/project/"+op.title} className="secondary-content">
                      <i className="material-icons">send</i></Link>
                    </li>
                 </div>
                  );

                })
                 
              }
            </ul>
              <Link to="/">Back</Link>
             </div>
        
         );
         

          
          
  }
}
}

export default Filter;
