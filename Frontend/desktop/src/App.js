import React, {Component} from 'react';
import './global.css';
import Routes from './routes/routes'

class App extends Component{

 handleScroll() { 
    if (document.documentElement.scrollTop > 430) {
       this.setState({
         className: 'show'
       })
     } 
   }
  
   componentDidMount() {
     window.onscroll = () => this.handleScroll()
   }
   
   render(){
    return (
      <Routes/>
    );
   }
}

export default App;
