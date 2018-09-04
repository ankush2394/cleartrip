import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props){
        super(props);
        this.state={
            val:"",
            searchoptions:[{}],
            x:false
          }
    }

    func() {
      //console.log("he")

      if(this.state.val!=""){

        fetch("http://starlord.hackerearth.com/kickstarter")
        .then(d => d.json())
        .then(d => {
          var list=[{}]
          for(var key in d) {
            
              //console.log(d[key].title)
              if(this.state.val.toLowerCase()==d[key].title.split(" ")[0].toLowerCase())
              list.push(d[key]);
              
              
            
            
          }
          console.log(list)
          //everything in list as json
          this.setState({x:true});
          if(list[0]==""){}else{this.setState({searchoptions:list});}
        })  

      }
      else{
        alert("type something atleast")
      }
    }

    _handleKeyPress = (e) => {
    if (e.key==="Enter") {
      this.func();
      
    }
  }
  render() {
    this.state.searchoptions.shift();
    console.log(this.state.searchoptions)
    if(!this.state.x){
      return (
         <div className = "navbar-fixed" >
      	 <nav>
      <div className="nav-wrapper">
        <a href="https://www.cleartrip.com/" target="_blank" className="brand-logo">Clear Trip</a>
        <ul id="nav-mobile" className="right">
          <li><input type="text" width="200" placeholder=" Search Via Name"
           value={this.state.val} onChange={(e)=>{this.setState({val:e.target.value});}}
           onKeyPress={this._handleKeyPress}

         /></li>
          <li><Link to="/"><i class="large material-icons">home</i></Link></li>
          <li><Link to="/filter"><i class="large material-icons">filter</i></Link></li>
          <li>Percentage funded</li>
          <li><Link to="/sorta"><i class="large material-icons">arrow_downward</i></Link></li>
          <li><Link to="/sortd"><i class="large material-icons">arrow_upward</i></Link></li> 
          <li>End Time</li>
          <li><Link to="/endtimea"><i class="large material-icons">arrow_downward</i></Link></li>
          <li><Link to="/endtimed"><i class="large material-icons">arrow_upward</i></Link></li>        
        </ul>
      </div>
    </nav>
    </div>
      );
  }
  else {
    return(

      <div>
      <Header />
      <ul className="collection with-header">
      {
        this.state.searchoptions.map(function(op,id){
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
}

export default Header;
