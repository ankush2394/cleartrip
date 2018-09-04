import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'


class Project extends Component {

  constructor(props){
        super(props);
        this.state={
            val:[{}]
        }
    }

  componentDidMount(){

    fetch("http://starlord.hackerearth.com/kickstarter")
    .then(d => d.json())
    .then(d => {
      var list=[]
      var flag = false
      for(var key in d) {
        
          list.push(d[key]);
          console.log(d[key]);
        
        
      }
      //everything in list as json
      list.sort(function(a,b){
        
        return (a["percentage.funded"]-b["percentage.funded"]);
      });
      this.setState({val:list});
      console.log(this.state.val)

    })

    //console.log(thival)

  }
  render() {
  
      if(!this.state.val)
        return(<div><p>Loading...</p></div>);
      return (
       <div >
       <Header />
       <ul className="collection with-header">
       {
        this.state.val.map(function(op,id){

          return(
              <div>
                <li className ="yellow lighten-4 collection-item" key={id}>
                 {op.title}<Link to={"/project/"+op.title} className="secondary-content"><i className="material-icons">
                 send</i></Link>
                </li>
              </div>
            );

        })
       }
       </ul>
      </div>
    );
  }
}

export default Project;
