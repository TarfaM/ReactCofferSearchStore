// search bar
import React, {Component} from 'react';


//using State
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: '' };
  };
render(){
  return (
  <div>
  <input onChange ={event => this.setState ({term: event.target.value})}/>
Value of the input : {this.state.term}
  </div>
);
}
}
//End using State

  //exporting the elemanet
export default SearchBar;
