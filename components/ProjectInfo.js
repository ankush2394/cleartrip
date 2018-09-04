import React, { Component } from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'



class ProjectInfo extends Component {
	constructor(props){
        super(props);
        this.state={
            val:[{}]
        }
    }

	componentDidMount(){
		var { match } = this.props;
    	 var projectname = match.params.projectname;
    fetch("http://starlord.hackerearth.com/kickstarter")
    .then(d => d.json())
    .then(d => {
      var list=[]
      
      for(var key in d) {
        
        if(d[key].title==projectname)	
          list.push(d[key]);
          console.log(d[key]);
        
        
      }
      //everything in list as json

      this.setState({val:list});
      console.log(this.state.val)

    })

    //console.log(thival)

  }

  render() {
  	
    // return (
    // 	if(!this.state.val){
    // 		return(<div><p>Loading..</div></p>);
    // 	}
    var x = "percentage.funded";
    return(
      <div className = "yellow lighten-4">

        <Header />
        <h1>Hello </h1>
        <br />
        <h4><b>Project Name:</b> {this.state.val[0].title}</h4>
        <br />
        <b>Blurb:</b> {this.state.val[0].blurb}
        <br />
        <b>Country:</b> {this.state.val[0].country}
        <br />
        <b>State:</b> {this.state.val[0].state}
        <br />
        <b>Location:</b> {this.state.val[0].location}
        <br />
        <b>Currency:</b> {this.state.val[0].currency}
        <br />
        <b>Type:</b> {this.state.val[0].type}
        <br />
        <b>Percentage funded:</b> {this.state.val[0]["percentage.funded"]}
        <br />
        <b>Amount Pledged:</b> {this.state.val[0]["amt.pledged"]}
        <br />
        <b>End Time:</b> {this.state.val[0]["end.time"]}
        <br />
        <b>Number of  Backers:</b> {this.state.val[0]["num.backers"]}
        <br />
        <b>By:</b>{this.state.val[0].by}
        <br />
        <b>Url:</b> {this.state.val[0].url}
        <br />
        <br />
        <div className="black"><Link to="/">Back</Link></div>
      </div>
    );
  }
}

export default ProjectInfo;
